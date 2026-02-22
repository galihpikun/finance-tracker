import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editPassword } from "@/lib/user";
import { Pencil } from "lucide-react";



export function EditPassword() {
  return (
    <Dialog>
        <DialogTrigger className="flex  items-center border-3 rounded-xl border-emerald-500 text-emerald-500 px-4 py-2 gap-2 hover:bg-gray-100 w-full justify-center font-semibold">
          <Pencil className="w-4 h-4" /> Edit Password
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Password</DialogTitle>
            <DialogDescription>
              Edit Password Akunmu, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet kntl consectetur adipisicing elit.
            </DialogDescription>
          </DialogHeader>
          <form action={editPassword}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Password</Label>
              <Input id="name-1" name="password" placeholder="Your Password" required />
            </Field>
            
          </FieldGroup>
          <DialogFooter className="mt-2">
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <DialogClose asChild>
                <Button type="submit">Save changes</Button>
            </DialogClose>
            
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  );
}
