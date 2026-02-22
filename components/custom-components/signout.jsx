"use client"

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function SignOut() {
    function logoutHandler () {
        signOut({
            callbackUrl: '/'   
        });
        toast.success('Anda berhasil keluar.')
    }
    return (
        <Button onClick={logoutHandler} variant="ghost" className="w-full h-8 flex text-red-600">
            <LogOut></LogOut> Sign Out
        </Button>
    )
}