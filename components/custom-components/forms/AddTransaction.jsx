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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { inputTrans } from "@/lib/transaction";

export function AddTransactions() {
  return (
    <Dialog>
      
        <DialogTrigger className="bg-linear-to-bl from-emerald-500 to-emerald-800 text-white px-4 py-2 rounded-md font-semibold">
          Add Transactions
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Transactions</DialogTitle>
            <DialogDescription>
              Add Transaksi disini, Taroh pemasukan atau pengeluaran mani disini
              dan atur detil itilnya.
            </DialogDescription>
          </DialogHeader>
          <form action={inputTrans}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Transaction Name</Label>
              <Input id="name-1" name="name" placeholder="Sushi" required />
            </Field>
            <Field>
              <Label htmlFor="username-1">Amount</Label>
              <Input
                id="username-1"
                name="amount"
                type="number"
                placeholder="Rp.50000"
                required
              />
            </Field>
            <Field>
              <Label>Category</Label>
              <Select name="categories" required>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
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
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Income Or Expense?</Label>
              <Select name="type" required>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="In or Out?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="income" className="text-emerald-400">
                      Income
                    </SelectItem>
                    <SelectItem value="expense" className="text-red-400">
                      Expense
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label>Cash Or Bank?</Label>
              <Select name="balance_type" required>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="balance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cash" className="text-emerald-400">
                      Cash
                    </SelectItem>
                    <SelectItem value="bank" className="text-blue-400">
                      Bank
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
