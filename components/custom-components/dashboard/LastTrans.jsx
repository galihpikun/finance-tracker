import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { last10Trans } from "@/lib/transaction"

export default async function LastTransactions() {

    const datas = await last10Trans();
    return(
        <div>
            <h1 className="text-2xl font-medium mb-5">Last 10 Transactions</h1>
            <Table>
  <TableCaption>A list of your 10 recent <span className="font-semibold">Transactions</span>.</TableCaption>
  <TableHeader>
    <TableRow className="text-center">
      <TableHead>Transactions</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Balance</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    
      {datas.map((data) => (
        <TableRow key={data.id}>
            <TableCell>{data.trans_name}</TableCell>
            <TableCell>{data.categories}</TableCell>
            <TableCell>{new Date(data.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}</TableCell>
  <TableCell>{data.balance_type}</TableCell>
            <TableCell className={`text-right font-semibold ${data.type == "expense" ? "text-red-500" : "text-green-500"}`}>{data.type == "expense" ? "-" : "+"} Rp. {Number(data.amount).toLocaleString("id-ID")}</TableCell>
        </TableRow>
      ))}
    
  </TableBody>
</Table>
        </div>
    )
}