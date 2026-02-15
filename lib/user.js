"use server"

import connection from "./db";
import z from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

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