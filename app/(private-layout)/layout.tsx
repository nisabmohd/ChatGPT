import Navbar from "@/components/navbar";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function PrivateLayout({ children }: PropsWithChildren) {
  const session = await getUser();
  if (!session?.user) redirect("/login");
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
