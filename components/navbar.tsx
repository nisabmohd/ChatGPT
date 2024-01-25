import Link from "next/link";
import { buttonVariants } from "./ui/button";
import ToggleTheme from "./toggle";
import { NamedLogoWithLink } from "./logo";
import Profile from "./profile";

const btnVariant = buttonVariants({
  variant: "link",
  className: "text-base",
  size: "sm",
});

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-24 mb-7 top-0 sticky bg-background">
      <NamedLogoWithLink />
      <div className="sm:flex flex-row items-center hidden">
        <ToggleTheme />
        <div className="ml-3 flex flex-row items-center">
          <Link href="/chat" className={btnVariant}>
            New chat
          </Link>
          <Profile />
        </div>
      </div>
    </nav>
  );
}
