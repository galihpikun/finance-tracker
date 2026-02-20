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
import { addGoals, payGoals } from "@/lib/transaction";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import fetchBalanceTotal,{fetchBalanceBank,fetchBalanceCash} from "@/lib/transaction";



export async function PayGoal({data}) {
    const balance = await fetchBalanceTotal();
    const balanceCash = await fetchBalanceCash();
    const balanceBank = await fetchBalanceBank();

    const percentage = (data.saved_amount / data.target_amount) * 100;
  return (
    <Dialog>
      
        <DialogTrigger variant="outline" className="border-emerald-500 border-4 py-2 rounded-xl text-emerald-500 hover:bg-emerald-500 hover:text-white">
          Add Money
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{data.name}</DialogTitle>
            <DialogDescription>
              Add Money to this goal, Save up and lololo
            </DialogDescription>
            <div className="p-3 rounded-md shadow-lg flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Current Progress</p>
                    <p className="font-medium text-emerald-600">{percentage}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-emerald-600 font-semibold text-lg">{Number(data.saved_amount).toLocaleString("id-ID")}</p>
                    <p className="font-medium text-gray-600 text-sm">to {Number(data.target_amount).toLocaleString("id-ID")}</p>
                </div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 flex flex-col gap-1">
                <div className="flex justify-between">
                    <h1>Available Balance</h1>
                <h1 className="font-semibold">Rp.{Number(balance).toLocaleString("id-ID")}</h1>
                </div>
                <div className="flex justify-between  text-sm">
                    <h1>Cash Balance</h1>
                <h1>Rp.{Number(balanceCash).toLocaleString("id-ID")}</h1>
                </div>
                <div  className="flex justify-between text-sm">
                    <h1>Bank Balance</h1>
                <h1>Rp.{Number(balanceBank).toLocaleString("id-ID")}</h1>
                </div>
            </div>
          </DialogHeader>
          <form action={payGoals}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Amount to Add</Label>
              <Input id="name-1" name="amount" type="number" required />
            </Field>
            <Field>
                <Label>Pay With?</Label>
              <Select name="balance_type" required>
                <SelectTrigger className="w-45">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Cash" className="text-emerald-400">
                      Cash
                    </SelectItem>
                    <SelectItem value="Bank" className="text-blue-400">
                      Bank
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <input type="hidden" value={data.name} name="name" />
            <input type="hidden" value={data.id} name="id" />
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
