import LeftPanel from "@/components/left-panel";
import { PropsWithChildren } from "react";

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex sm:flex-row flex-col items-start sm:gap-12 gap-4 w-full">
      <div className="sticky top-32">
        <LeftPanel />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
