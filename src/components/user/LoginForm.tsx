"use client"

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  Input,
  Button,
} from "@/components" 
import { loginSchema, type LoginData } from "@/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"


export default function LoginForm() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = (data: LoginData) => {
    console.log("Login Data:", data)
    // TODO: Add login API logic
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl transition-all duration-500 ease-in-out animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-xl font-bold text-center text-blue-500 animate-slide-down md:py-2">
            Login to Your Account
          </h2>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    className="transition-all py-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className="transition-all focus-visible:ring-2 py-5 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white text-md transition-all duration-300 py-6 rounded-lg shadow-md"
          >
            Login
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Don't have an account?{" "}
        <Link to="/user/register" className="text-blue-600 hover:underline font-medium">
          Register
        </Link>
      </p>
    </div>
  )
}
