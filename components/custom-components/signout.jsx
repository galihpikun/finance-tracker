"use client"

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export function SignOut() {
    return (
        <Button onClick={signOut} variant="ghost" className="w-full h-8 flex text-red-600">
            <LogOut></LogOut> Sign Out
        </Button>
    )
}