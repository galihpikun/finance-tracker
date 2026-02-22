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
import { editPersonals } from "@/lib/user";
import { Pencil } from "lucide-react";



export function EditProfile({passing}) {
  return (
    <Dialog>
        <DialogTrigger className="flex items-center text-emerald-500 px-4 py-2 gap-2 hover:bg-gray-100 rounded-md font-semibold">
          <Pencil className="w-4 h-4" /> Edit Profile
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Edit Informasi Akunmu, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet kntl consectetur adipisicing elit.
            </DialogDescription>
          </DialogHeader>
          <form action={editPersonals}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Goals Name</Label>
              <Input id="name-1" name="name" placeholder="Your Username" defaultValue={passing.name} required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Target Amount</Label>
              <Input
                id="username-1"
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                defaultValue={passing.email}
                required
              />
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
