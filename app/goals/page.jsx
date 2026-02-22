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
import { Card} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { dataGoals, fetchGoals, tes } from "@/lib/transaction";
import { AddGoals } from "@/components/custom-components/forms/AddGoals";
import { PayGoal } from "@/components/custom-components/forms/PayGoal";

export default async function Page() {
  

  const goals = await fetchGoals();
  const {saved, target} =  await dataGoals();

  const dataSaved = saved[0].saved;
  const dataTarget = target[0].target;
  const dataPercentage = (dataSaved/dataTarget) * 100;
 

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 shadow-md justify-between">
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
                  <BreadcrumbPage>Goals</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <AddGoals></AddGoals>

        </header>
        <div className="flex flex-col px-10 p-4">
          <h1 className="text-3xl font-bold">Financial Goals</h1>
          <p className="mt-1">
            Track and Achieve your saving goals, Lorem ipsum dolor sit amet.
          </p>

          <section className="flex flex-col gap-5">
            <div className="p-5 rounded-2xl shadow-md flex flex-col gap-2">
              <h1 className="text-2xl font-medium">Overall Progress</h1>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${dataPercentage}%` }}
                />
              </div>
              <div className="flex flex-row justify-between pt-2">
                <div>
                  <h2 className="font-medium text-gray-600">Total Saved</h2>
                  <h3 className="font-bold text-emerald-500 text-xl">
                    Rp. {Number(dataSaved).toLocaleString("id-ID")}
                  </h3>
                </div>
                <div className="text-right">
                  <h2 className="font-medium text-gray-600">Total Target</h2>
                  <h3 className="font-bold text-xl">Rp. {Number(dataTarget).toLocaleString("id-ID")}</h3>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-medium">Your Goals</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7">
                
              {goals.map((goal) => {
                const percentage = (goal.saved_amount / goal.target_amount) * 100;

                return (
                <Card className="p-3 flex flex-col gap-3 bg-linear-to-br" key={goal.id}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{goal.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between">
                    <p className="font-medium">Rp. <span className="font-semibold text-emerald-600">{Number(goal.saved_amount).toLocaleString("id-ID")}</span>/{Number(goal.target_amount).toLocaleString("id-ID")}</p>
                    <p className="font-medium text-emerald-500">{percentage.toFixed(0)}%</p>
                </div>
                <PayGoal data={goal}></PayGoal>
              
                <p className="flex items-center text-gray-500 font-semibold gap-2 text-sm"><Calendar size={20}/> Target: 2024-06-15</p>
          
              </Card>
              )})}

            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
