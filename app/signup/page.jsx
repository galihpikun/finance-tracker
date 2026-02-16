import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-linear-to-bl from-emerald-500 to-emerald-900">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
