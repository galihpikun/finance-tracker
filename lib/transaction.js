"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connection from "./db";

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
