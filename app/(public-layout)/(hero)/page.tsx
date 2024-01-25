import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh]">
      <h3 className="text-4xl font-bold text-center">
        Welcome to OpenChat! Your Gateway to Intelligent Conversations, Powered
        by OpenAPI
      </h3>
      <p className="sm:w-[75%] mx-auto text-center text-muted-foreground ">
        OpenChat redefines the chat experience by seamlessly integrating the
        robust capabilities of the OpenAPI. This platform takes conversational
        AI to new heights, offering you a dynamic and intelligent chat companion
        designed for a wide array of applications.
      </p>
      <Link href="/register" className={buttonVariants({ size: "lg" })}>
        Get started
      </Link>
    </div>
  );
}
