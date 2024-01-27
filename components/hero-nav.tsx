import Link from "next/link";
import { NamedLogoWithLink } from "./logo";
import { buttonVariants } from "./ui/button";
import ToggleTheme from "./toggle";

export default function HeroNav() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-24 mb-7 top-0 sticky bg-background">
      <NamedLogoWithLink />
      <div className="flex flex-row items-center">
        <ToggleTheme />
        <Link
          href="/login"
          className={buttonVariants({
            variant: "link",
            className: "text-base sm:ml-3",
            size: "sm",
          })}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={buttonVariants({
            variant: "link",
            className: "text-base",
            size: "sm",
          })}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
