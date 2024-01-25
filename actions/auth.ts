import prisma from "@/prisma/client";

type Register = {
  email: string;
  username: string;
  password: string;
};

//TODO:
export async function registerUser({ email, password, username }: Register) {}
