import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import Chat from "./chat";
import { JsonMessagesArraySchema } from "@/types";

type PageParams = {
  params: {
    id: string;
  };
};

export default async function ChatSpecificPage({ params: { id } }: PageParams) {
  const res = await prisma.conversation.findUnique({
    where: {
      id,
    },
  });
  if (!res) return notFound();
  const parseResult = JsonMessagesArraySchema.parse(res.messages);
  return <Chat id={id} messages={parseResult} />;
}
