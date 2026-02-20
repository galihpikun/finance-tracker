"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { filterTrans } from "@/lib/transaction";

export default function transactions() {

    const [datas, setDatas] = React.useState([]);

async function getFilter() {
    const datas = await filterTrans({
  from: date.from,
  to: date.to,
  type,
  category,
  search
});

setDatas(datas);

}

  const [date, setDate] = React.useState({
    from: undefined,
    to: undefined
  });

  const [type, setType] = React.useState("");
  const [category,setCategory] = React.useState("");
  const [search,setSearch] = React.useState("");



  React.useEffect(() => {
  getFilter();
}, [date, type, category, search]);




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
                  <BreadcrumbPage>Transactions</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col px-10 p-4">
          <div className="flex flex-row w-full justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Transactions</h1>
              <p className="mt-1">View and manage all your transactions</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker-range"
                  className="justify-start px-2.5 font-normal">
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-row gap-4 mt-5">
            <Field orientation="horizontal" className="flex flex-row gap-4">
                <Select onValueChange={(value) => {
                    setType(value)
                }}>
              <SelectTrigger className="w-45">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    <SelectItem value={null}>All</SelectItem>
                    <SelectItem value="Income">Income</SelectItem>
                  <SelectItem value="Expense">Expense</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select name="categories" required onValueChange={(value) => {
                    setCategory(value)
                }}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={null}>All</SelectItem>
                    <SelectItem value="Food & Drinks">Food & Drinks</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Housing">Housing</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Vehicle">Vehicle</SelectItem>
                    <SelectItem value="Life & Entertainment">
                      Life & Entertainment
                    </SelectItem>
                    <SelectItem value="Communication, PC">
                      Communication, PC
                    </SelectItem>
                    <SelectItem value="Financial Expenses">
                      Financial Expenses
                    </SelectItem>
                    <SelectItem value="Investments">Investments</SelectItem>
                    <SelectItem value="Income/Salary">Income/Salary</SelectItem>
                    <SelectItem value="Goals">Goals</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
               <Field orientation="horizontal" className="w-1/2">
      <Input type="search" placeholder="Search..." onChange={(e) => {
                    setSearch(e.target.value)
                }} />
    </Field>
          </div>

          <div className="mt-5 h-130 overflow-y-auto">
            <h1 className="text-2xl font-medium mb-5">Last Transactions</h1>
            <Table>
  <TableCaption>A list of your recent <span className="font-semibold">Transactions</span>.</TableCaption>
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
