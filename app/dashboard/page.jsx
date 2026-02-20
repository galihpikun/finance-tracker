import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ArrowUp, Wallet, Landmark } from "lucide-react";
import fetchBalanceTotal, {
  fetchBalanceBank,
  fetchBalanceCash,
  topSpender,
} from "@/lib/transaction";
import ChartAreaIcons from "@/components/custom-components/dashboard/ChartAreaIcons";
import { ChartRadarDefault } from "@/components/custom-components/dashboard/Radar";
import LastTransactions from "@/components/custom-components/dashboard/LastTrans";
import { AddTransactions } from "@/components/custom-components/forms/AddTransaction";

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const user = session?.user;

  const data = await topSpender();
  const balance = await fetchBalanceTotal();
  const balanceCash = await fetchBalanceCash();
  const balanceBank = await fetchBalanceBank();

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 shadow-md justify-between" >
          <div className="flex items-center">
            <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>Control Your Finance</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </div>
          <AddTransactions></AddTransactions>
        </header>
        <div className="flex flex-col px-10 p-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-1">
            Welcome Back <span className="font-medium text-emerald-500">{user.name}</span>! Here's your financial overview.
          </p>

          <div className="flex flex-col gap-7 mt-5">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="w-full bg-linear-65 from-emerald-400 to-emerald-600 rounded-4xl p-5 flex flex-col gap-2 py-7 text-white shadow-md hover:shadow-xl transition-all duration-300">
                <p>Total Balance</p>
                <h1 className="text-4xl font-bold">
                  Rp.{Number(balance).toLocaleString("id-ID")}
                </h1>
                <div className="flex flex-row gap-1 items-center">
                  <ArrowUp size={20} />
                  <p>+12.5% this month</p>
                </div>
              </div>

              <div className="w-full shadow-md hover:shadow-xl rounded-4xl p-5 flex flex-col gap-1 py-7 transition-all duration-300">
                <div className="flex items-center p-2 rounded-lg bg-emerald-200 w-fit">
                  <Wallet className="text-emerald-600" size={20} />
                </div>
                <p>Cash Balance</p>
                <h1 className="text-2xl font-bold">
                  Rp.{Number(balanceCash).toLocaleString("id-ID")}
                </h1>
              </div>

              <div className="w-full shadow-md hover:shadow-xl rounded-4xl p-5 flex flex-col gap-1 py-7 transition-all duration-300">
                <div className="flex items-center p-2 rounded-lg bg-blue-200 w-fit">
                  <Landmark className="text-blue-600" size={20} />
                </div>
                <p>Bank Balance</p>
                <h1 className="text-2xl font-bold">
                  Rp.{Number(balanceBank).toLocaleString("id-ID")}
                </h1>
              </div>
            </div>

            <div className="w-full flex flex-row gap-7">
                <ChartAreaIcons></ChartAreaIcons>
                <ChartRadarDefault data={data}></ChartRadarDefault>
            </div>

            <div>
              <LastTransactions></LastTransactions>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
