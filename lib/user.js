"use server"

import connection from "./db";
import z from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function register(formData) {
  let user = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let peraturan = z.object({
    username: z.string().min(6, "Username minimal 6 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
  });

  let hasil = peraturan.safeParse(user);

  const hashed = bcrypt.hashSync(user.password, 10);

  if (!hasil.success) {
    return { errors: hasil.error.flatten().fieldErrors };
  }

  await connection.execute(
    "insert into users (username, email, password) values (?,?,?)",
    [user.username, user.email, hashed]
  );

  redirect("/login");
}

export async function findUserByEmail(email) {
  const [user] = await connection.execute(
    "select * from users where email = ?",
    [email]
  );

  if (!user.length) return null;

  return user[0];
}
export async function editUsername(formData) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const username = formData.get("username");

  await connection.execute(`update users set username = ? where id = ?`, [
    username,
    user.id,
  ]);

  revalidatePath("/profile");
}

export async function editEmail(formData) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const email = formData.get("email");

  await connection.execute(`update users set email = ? where id = ?`, [
    email,
    user.id,
  ]);

  revalidatePath("/profile");
}

export async function editPassword(formData) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const password = bcrypt.hashSync(formData.get("password"), 10);

  await connection.execute(`update users set password = ? where id = ?`, [
    password,
    user.id,
  ]);

  revalidatePath("/profile");
}

export async function deleteUserProfile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  await connection.execute(`DELETE FROM users WHERE id = ?`, [user.id]);

  alert("Akun berhasil dihapus! Anda akan dibawa ke homepage.");

  revalidatePath("/");
}