"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function GoogleLogin() {
  return <Button onClick={() => signIn("google")}>Continue with Google</Button>;
}
