import LeftPanel from "@/components/left-panel";
import { PropsWithChildren } from "react";

export default function ChatLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex sm:flex-row flex-col items-start sm:gap-12 gap-4 w-full">
      <div className="sm:sticky bg-background sm:w-fit w-full sm:top-32 sm:mb-0 mb-4">
        <LeftPanel />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
