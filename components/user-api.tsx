"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import SignOutButton from "@/components/signout-btn";
import { useToast } from "./ui/use-toast";

export default function UserApi() {
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (window) {
      const value = localStorage.getItem("apiKey") ?? "";
      setApiKey(value);
    }
  }, []);

  function handleSave() {
    localStorage.setItem("apiKey", apiKey);
    toast({
      title: "Saved profile",
    });
  }

  return (
    <>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="api">OpneAI Key</Label>
        <Input
          id="api"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <Button className="w-24" onClick={handleSave}>
          Save
        </Button>
        <SignOutButton />
      </div>
    </>
  );
}
