import { LoginForm } from "@/components/login-form";

function LoginPage() {
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
      <LoginForm className="w-full max-w-md" />
    </div>
  );
}

export default LoginPage;