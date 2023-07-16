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
  title: "Sign up | ChatGPT",
  description: "ChatGPT clone with simple design signup page",
};

export default function Signup() {
  return (
    <div className="flex flex-col items-center h-screen">
      <span className="mt-12">{Logo}</span>
      <Card className="w-[380px] py-5 mt-20">
        <CardHeader>
          <CardTitle>New to ChatGPT</CardTitle>
          <CardDescription>Create your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 mt-1">
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="email">Email </Label>
                <Input id="email" placeholder="john.doe@example.com" />
              </div>
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="johndoe" />
              </div>
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="avatar">
                  Avatar URL{" "}
                  <span className="text-neutral-400">(optional)</span>
                </Label>
                <Input
                  id="avatar"
                  placeholder="https://github.com/johndoe.png"
                />
              </div>
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="api">API key</Label>
                <Input id="api" placeholder="abcd1234" />
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
            Signup
          </Button>
        </CardFooter>
      </Card>
      <span className="mt-6 text-sm">
        Already have an account?{" "}
        <Link className="text-neutral-400" href="/auth/login">
          Log in
        </Link>{" "}
      </span>
    </div>
  );
}
