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
import { ArrowUp, Wallet, Landmark, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function profile () {
    const session = await getServerSession(authOptions);
    const user = session?.user

    return(
        <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}>
      <AppSidebar/>
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
              <BreadcrumbItem>
                <BreadcrumbPage>Profile</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </div>

        </header>

    <div className="p-8 flex flex-col">

  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
    <p className="text-sm text-gray-500">Manage your account information and preferences</p>
  </div>

  <div className="flex gap-6">

    <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 w-1/3 shrink-0 shadow-sm border border-gray-100">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
      <div className="text-center">
        <p className="font-semibold text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <p className="text-xs text-gray-400">Member since January 2024</p>
      <button className="mt-1 w-full py-2 px-4 border border-teal-600 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-colors">
        Change Password
      </button>
    </div>

    <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
        <Button variant="ghost" className="flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700">
          <Pencil className="w-4 h-4" />
          Edit
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            defaultValue={user.name}
            readOnly
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm bg-white focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email Address</label>
          <input
            type="email"
            defaultValue={user.email}
            readOnly
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm bg-white focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            defaultValue="+1 (555) 123-4567 btw gada data notelp"
            readOnly
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm bg-white focus:outline-none"
          />
        </div>
      </div>
    </div>

  </div>
  <div className="w-full border-4 border-red-300 bg-red-50 border-dashed flex flex-col items-start justify-center gap-3 rounded-2xl p-5 mt-10">
    <h1 className="text-2xl text-red-600 font-semibold">Danger Zone</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus alias maiores!</p>
    <Button variant="destructive">Delete Account</Button>
  </div>


</div>

      </SidebarInset>
    </SidebarProvider>
    )
}