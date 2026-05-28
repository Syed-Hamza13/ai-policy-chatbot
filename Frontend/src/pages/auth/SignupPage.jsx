import { SignupForm } from "@/components/signup-form";

function SignupPage() {
  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      dark:bg-zinc-950
      bg-zinc-100
      px-4
    ">
      <SignupForm className="w-full max-w-md" />
    </div>
  );
}

export default SignupPage;