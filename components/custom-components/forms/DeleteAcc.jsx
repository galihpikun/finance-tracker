import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { deleteUserProfile } from "@/lib/user"

export function DeleteAcc({data}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={deleteUserProfile}>
        <AlertDialogFooter>
            <input type="hidden" value={data}  />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant="destructive">Continue</Button>
        </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
