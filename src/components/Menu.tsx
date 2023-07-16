import {
  Cloud,
  Github,
  LogOut,
  User,
  Menu as MenuIcon,
  Sun,
  Moon,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="absolute top-7 left-5" variant="ghost">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-6">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Edit profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <XCircle className="mr-2 h-4 w-4" />
          <span>Clear conversation</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
