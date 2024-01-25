import { JSONMessage } from "@/actions/chat";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import Chat from "./chat";

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
  const allMessages = JSON.parse(JSON.stringify(res.messages.toString())) as JSONMessage[];
  return <Chat id={id} messages={allMessages} />;
}
