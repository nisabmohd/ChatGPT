import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { PanelLeftIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { buttonVariants } from "./ui/button";
import prisma from "@/prisma/client";
import { getUser } from "@/lib/auth";

export default function LeftPanel() {
  return (
    <Sheet>
      <SheetTrigger>
        <PanelLeftIcon className="w-5 h-5 mt-1" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Conversations</SheetTitle>
        </SheetHeader>
        <div>
          <Suspense
            fallback={
              <p className={buttonVariants({ variant: "link" })}>Loading...</p>
            }
          >
            <ConversationList />
          </Suspense>
        </div>
      </SheetContent>
    </Sheet>
  );
}

async function ConversationList() {
  const session = await getUser();
  if (!session?.user) return null;
  const { conversations } = (await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      conversations: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  }))!;

  return (
    <div className="flex flex-col mt-7 items-start">
      {conversations.map((cn) => (
        <SheetClose asChild key={cn.id}>
          <Link
            href={`/chat/${cn.id}`}
            className={buttonVariants({
              variant: "link",
              className: "px-0 truncate",
            })}
          >
            {cn.name.length > 35 ? cn.name.slice(0, 35) + "..." : cn.name}
          </Link>
        </SheetClose>
      ))}
    </div>
  );
}
