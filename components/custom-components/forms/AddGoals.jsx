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
import { addGoals } from "@/lib/transaction";



export function AddGoals() {
  return (
    <Dialog>
      
        <DialogTrigger className="bg-linear-to-bl from-emerald-500 to-emerald-800 text-white px-4 py-2 rounded-md font-semibold">
          Add Goals
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Your Goals</DialogTitle>
            <DialogDescription>
              Add Goal gol disini, Taroh pemasukan atau pengeluaran mani disini
              dan atur detil itilnya.
            </DialogDescription>
          </DialogHeader>
          <form action={addGoals}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Goals Name</Label>
              <Input id="name-1" name="name" placeholder="Sushi" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Target Amount</Label>
              <Input
                id="username-1"
                name="amount"
                type="number"
                placeholder="Rp.500.000"
                required
              />
            </Field>
            
          </FieldGroup>
          <DialogFooter className="mt-2">
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button type="submit">Save changes</Button>
            
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  );
}
