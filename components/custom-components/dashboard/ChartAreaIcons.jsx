import { fetchSpendingOverview } from "@/lib/transaction"
import ChartArea from "./linechart"

export default async function ChartAreaIcons() {

  const data = await fetchSpendingOverview()

  return <ChartArea data={data} />

}
