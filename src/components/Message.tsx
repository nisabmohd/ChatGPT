import { Logo } from "./assets/Icons";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

type MessageProps = {
  message: string;
  id: string;
  isUser: boolean;
  isNew?: boolean;
};

export default function Message({
  id,
  isUser,
  message,
  isNew = false,
}: MessageProps) {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [isNewMessage, setIsNewMessage] = useState(isNew);
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
      <div className="flex flex-row gap-6 w-[50%] max-[900px]:w-[88%]  mx-auto items-start">
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
        <span className="leading-8">
          {isUser || !isNewMessage ? (
            message
          ) : (
            <Typewriter
              options={{
                delay: 45,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(message)
                  .start()
                  .callFunction(() => {
                    setIsNewMessage(false);
                  });
              }}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export function Skeleton() {
  return (
    <div className={`py-7 h-fit dark:bg-neutral-900 bg-neutral-100`}>
      <div className="flex flex-row gap-6 w-[50%] max-[900px]:w-[88%]  mx-auto items-start">
        <span className="">{Logo}</span>
        <span className="leading-8">
          <Typewriter
            options={{
              delay: 85,
              loop: true,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("...").start();
            }}
          />
        </span>
      </div>
    </div>
  );
}
