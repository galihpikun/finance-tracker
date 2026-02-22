

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical, UserCircle } from "lucide-react"
import { SignOut } from "./custom-components/signout"
import Link from "next/link"


export default function DropDown() {


    return (
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="flex justify-between">
        <p>Account Info</p> <EllipsisVertical></EllipsisVertical>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuGroup>
      <DropdownMenuItem><Link href="/profile" className="flex items-center gap-2 justify-center w-full font-medium"><UserCircle className="text-black"/> Profile</Link></DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuSeparator />
      <SignOut></SignOut>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
    )
}