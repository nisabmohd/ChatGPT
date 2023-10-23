"use client";

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
import axios, { AxiosError } from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { httpRequest } from "@/lib/interceptor";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const EDIT_INITIAL = {
  username: "",
  avatar: "",
  apiKey: "",
};

export default function Menu({ clear }: { clear: () => void }) {
  const { toast } = useToast();
  const { push } = useRouter();
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(EDIT_INITIAL);

  useEffect(() => {
    let localMode = localStorage.getItem("mode");
    if (!localMode) {
      return;
    }
    if (localMode == "dark") {
      document.getElementById("mode")?.classList.add("dark");
      setMode("dark");
    } else {
      document.getElementById("mode")?.classList.remove("dark");
      setMode("light");
    }
  }, []);

  function handleLogout() {
    axios
      .delete("/api/auth/logout")
      .then(() => {
        localStorage.clear();
        push("/auth/login");
        toast({
          title: "Logged out",
          description: "successfuly logged out user",
        });
      })
      .catch((err) => {
        if (err instanceof AxiosError)
          toast({
            title: "Logout unsuccessful",
            description: err.response?.data.message,
          });
      });
  }

  function toggleMode() {
    document.getElementById("mode")?.classList.toggle("dark");
    const v = mode == "light" ? "dark" : "light";
    setMode(() => v);
    localStorage.setItem("mode", v);
  }

  function handleClear() {
    httpRequest
      .delete("/api/chat")
      .then(() => {
        clear();
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.response?.data.message,
        });
      });
  }

  function handleUpdate() {
    httpRequest
      .put("/api/profile", {
        ...edit,
      })
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.reload();
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.response?.data.message,
        });
      });
  }

  useEffect(() => {
    if (open) {
      setEdit(EDIT_INITIAL);
    }
  }, [open]);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="absolute top-7 left-5 max-[500px]:left-2 z-[999]"
            variant="default"
          >
            <MenuIcon className="w-5 h-5" />{" "}
            <span className="ml-2 hidden sm:flex">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="dark:border-slate-800 z-[9999]">
          <SheetHeader>
            <div className="pt-8 flex flex-col gap-2">
              <div
                className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <User className="mr-2 h-5 w-5" />
                <span>Edit profile</span>
              </div>
              <div
                className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg cursor-pointer"
                onClick={handleClear}
              >
                <XCircle className="mr-2 h-5 w-5" />
                <span>Clear conversation</span>
              </div>
              <Link
                href="https://github.com/nisabmohd/ChatGPT"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg"
              >
                <Github className="mr-2 h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <div className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg cursor-pointer">
                {mode === "dark" ? (
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={toggleMode}
                  >
                    {" "}
                    <Sun className="mr-2 h-5 w-5" />
                    <span>Light mode</span>
                  </div>
                ) : (
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={toggleMode}
                  >
                    {" "}
                    <Moon className="mr-2 h-5 w-5" />
                    <span>Dark mode</span>
                  </div>
                )}
              </div>
              <Link
                href="https://platform.openai.com/docs/"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg cursor-pointer"
              >
                <Cloud className="mr-2 h-5 w-5" />
                <span>API</span>
              </Link>
              <div
                className="flex flex-row items-center gap-2 hover:bg-gray-800 dark:hover:text-inherit hover:text-white py-3 px-3 rounded-lg cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-5 w-5" />
                <span>Log out</span>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
        <DialogContent className="sm:max-w-[495px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={edit.username}
                onChange={(e) =>
                  setEdit((prev) => ({ ...prev, username: e.target.value }))
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatar" className="text-right">
                Avatar URL
              </Label>
              <Input
                id="avatar"
                value={edit.avatar}
                onChange={(e) =>
                  setEdit((prev) => ({ ...prev, avatar: e.target.value }))
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="api" className="text-right">
                API Key
              </Label>
              <Input
                id="api"
                value={edit.apiKey}
                onChange={(e) =>
                  setEdit((prev) => ({ ...prev, apiKey: e.target.value }))
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleUpdate}
              disabled={!edit.apiKey && !edit.avatar && !edit.username}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
