"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button
      className="w-24"
      variant="destructive"
      onClick={() => {
        signOut();
        localStorage.removeItem("apiKey");
      }}
    >
      Signout
    </Button>
  );
}
