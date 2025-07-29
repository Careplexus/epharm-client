import { LoginForm } from "@/components"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50 dark:bg-background px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-muted p-8 rounded-2xl shadow-md space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Welcome back! Enter your credentials to continue.
          </p>
        </div>

        <LoginForm />

        <p className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            to="/user/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
