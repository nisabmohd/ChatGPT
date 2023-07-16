import { Logo } from "./assets/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type MessageProps = {
  message: string;
  id: string;
  isUser: boolean;
};

export default function Message({ id, isUser, message }: MessageProps) {
  return (
    <div
      className={`${!isUser ? "py-7" : "py-1"} h-fit ${
        !isUser ? "bg-neutral-900" : "bg-inherit"
      }`}
    >
      <div className="flex flex-row gap-6 w-[50%] mx-auto items-start">
        {isUser ? (
          <>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/nisabmohd.png" />
              <AvatarFallback>CN</AvatarFallback>
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
