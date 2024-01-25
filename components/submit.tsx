"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon, SendHorizonalIcon } from "lucide-react";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" size="icon" className="h-12 w-12">
      {pending ? (
        <Loader2Icon className="w-5 h-5 animate-spin" />
      ) : (
        <SendHorizonalIcon className="w-5 h-5" />
      )}
    </Button>
  );
}
