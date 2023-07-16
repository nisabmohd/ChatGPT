"use client";

import { Logo } from "@/components/assets/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | ChatGPT",
  description: "ChatGPT clone with simple design signin page",
};

export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen">
      <span className="mt-12">{Logo}</span>
      <Card className="w-[380px] py-5 mt-48">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 mt-1">
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="email">Email or username</Label>
                <Input required id="email" placeholder="john.doe@example.com" />
              </div>
              <div className="flex flex-col gap-3 mt-2 space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex mt-1">
          <Button variant="custom" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
      <span className="mt-6 text-sm">
        Dont have an account?{" "}
        <Link className="text-neutral-400" href="/auth/signup">
          Sign up
        </Link>{" "}
      </span>
    </div>
  );
}
