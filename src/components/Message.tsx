import { Logo } from "./assets/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";

type MessageProps = {
  message: string;
  id: string;
  isUser: boolean;
};

export default function Message({ id, isUser, message }: MessageProps) {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  useEffect(() => {
    const local = localStorage.getItem("user");
    if (local) {
      const t = JSON.parse(local);
      if (t.avatar) {
        setAvatar(t.avatar);
      }
    }
  }, []);
  return (
    <div
      className={`${!isUser ? "py-7" : "py-1"} h-fit ${
        !isUser ? "dark:bg-neutral-900 bg-neutral-100" : "bg-inherit"
      }`}
    >
      <div className="flex flex-row gap-6 w-[50%] mx-auto items-start">
        {isUser ? (
          <>
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={avatar ?? "https://ui.shadcn.com/avatars/01.png"}
              />
            </Avatar>
          </>
        ) : (
          <span className="">{Logo}</span>
        )}
        <span className="leading-8">{message}</span>
      </div>
    </div>
  );
}
