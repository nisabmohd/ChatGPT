"use client";

import Submit from "@/components/submit";
import { Input } from "@/components/ui/input";
import { newChat } from "@/actions/chat";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function ChatInput() {
  const router = useRouter();
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    const message = formData.get("message") as string;
    if (!message) return;
    const apiKey = localStorage.getItem("apiKey");
    if (!apiKey) {
      toast({
        title: "No API key found!",
        description: 'Please add API key from "My account" section',
      });
      return;
    }
    const { message: err } = await newChat({
      apiKey,
      message,
    });
    if (err) {
      toast({
        title: err,
      });
    }
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-row items-center gap-2 sm:pr-5"
    >
      <Input
        autoComplete="off"
        name="message"
        placeholder="Ask me something..."
        className="h-12"
      />
      <Submit />
    </form>
  );
}
