"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connection from "./db";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export default async function fetchBalanceTotal() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const balance = await connection.execute(`
        SELECT
SUM(CASE WHEN type='income' THEN amount ELSE 0 END)
-
SUM(CASE WHEN type='expense' THEN amount ELSE 0 END)
AS total_balance
FROM transactions
WHERE user_id = ?;
        `, [user.id]);

        return balance[0][0].total_balance;
}
export async function fetchBalanceCash() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const balanceCash = await connection.execute(`
        SELECT
SUM(CASE WHEN type='income' THEN amount ELSE 0 END)
-
SUM(CASE WHEN type='expense' THEN amount ELSE 0 END)
AS cash_balance
FROM transactions
WHERE user_id = ? AND balance_type = 'cash';
        `, [user.id]);

        return balanceCash[0][0].cash_balance;
}
export async function fetchBalanceBank() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const balanceBank = await connection.execute(`
        SELECT
SUM(CASE WHEN type='income' THEN amount ELSE 0 END)
-
SUM(CASE WHEN type='expense' THEN amount ELSE 0 END)
AS bank_balance
FROM transactions
WHERE user_id = ? AND balance_type = 'bank';
        `, [user.id]);

        return balanceBank[0][0].bank_balance;
}

export async function fetchSpendingOverview() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

  const [rows] = await connection.execute(`

    SELECT
  DATE_FORMAT(created_at, '%Y-%m') AS month_key,
  DATE_FORMAT(created_at, '%M') AS month,
  SUM(CASE 
        WHEN type = 'income' THEN amount
        ELSE 0
      END) AS income,
  SUM(CASE 
        WHEN type = 'expense' THEN amount
        ELSE 0
      END) AS expense
FROM transactions
WHERE user_id = ?
AND created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
GROUP BY month_key, month
ORDER BY month_key;
  `, [user.id]);

  return rows;
}

export async function topSpender() {
  const session = await getServerSession(authOptions);
    const user = session?.user;

  const [rows] = await connection.execute(`
    SELECT 
categories,
SUM(amount) AS total
FROM transactions
WHERE type = 'expense'
AND user_id = ?
GROUP BY categories
ORDER BY total DESC
LIMIT 6;
    `, [user.id])

    return rows;
}

export async function last10Trans() {
  const session =  await getServerSession(authOptions);
  const user= session?.user

  const [rows] = await connection.execute(`
    select id,trans_name,amount,type,balance_type,categories, created_at from transactions where user_id = ? order by created_at desc limit 10;
    `, [user.id])

    return rows;
}

export async function inputTrans(formData) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  const name = formData.get("name")
  const amount = Number(formData.get("amount"))
  const type = formData.get("type")
  const balance = formData.get("balance_type")
  const categories = formData.get("categories")

    if (!name || !amount || !type || !balance || !categories) {
    
    
  }


  await connection.execute(`
    insert into transactions (user_id, trans_name, amount, type, balance_type, categories) values
(?, ?, ?, ?, ?, ?);
    `, [user.id, name,amount,type,balance,categories])

    revalidatePath("/dashboard")
}

export async function filterTrans(filters) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

   let query = `
    SELECT
      id,
      trans_name,
      amount,
      type,
      balance_type,
      categories,
      created_at
    FROM transactions
    WHERE user_id = ?
  `;

  let values = [user.id];

  if (filters.from && filters.to) {
    query += ` AND created_at BETWEEN ? AND ?`;

    values.push(filters.from, filters.to);
  }

  if (filters.type) {
    query += ` AND type = ?`;

    values.push(filters.type);
  }

  if (filters.category) {
    query += ` AND categories = ?`;

    values.push(filters.category);
  }

  if (filters.search) {
    query += ` AND trans_name LIKE ?`;

    values.push(`%${filters.search}%`);
  }

  query += ` ORDER BY created_at DESC`;

   const [rows] = await connection.execute(query, values);

  return rows;

}

