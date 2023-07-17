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
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [inputs, setInputs] = useState({
    input: "",
    password: "",
  });
  const { toast } = useToast();
  const { push } = useRouter();

  async function handleLogin() {
    const { input, password } = inputs;
    axios
      .post("/api/auth/login", { input, password })
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        push("/chat");
      })
      .catch((err) => {
        if (err instanceof AxiosError)
          toast({
            title: "Login unsuccessful",
            description: err.response?.data.message,
          });
      });
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <span className="mt-12">{Logo}</span>
      <Card className="w-[380px] py-5 mt-48 max-[900px]:mt-10 max-[400px]:w-[95%]">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 mt-1">
              <div className="flex flex-col gap-3  space-y-1.5">
                <Label htmlFor="email">Email or username</Label>
                <Input
                  required
                  value={inputs.input}
                  onChange={(e) =>
                    setInputs((prev) => ({ ...prev, input: e.target.value }))
                  }
                  id="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="flex flex-col gap-3 mt-2 space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs((prev) => ({ ...prev, password: e.target.value }))
                  }
                  required
                  type="password"
                  id="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex mt-1">
          <Button
            onClick={handleLogin}
            variant="custom"
            className="w-full"
            disabled={!inputs.input || !inputs.password}
          >
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
