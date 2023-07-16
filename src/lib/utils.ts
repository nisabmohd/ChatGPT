import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import ServerError, { JWTPayload } from "./types";
import { verify } from "jsonwebtoken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOpenAIApiInstance(apiKey: string) {
  const configuration = new Configuration({
    apiKey,
  });
  return new OpenAIApi(configuration);
}

export function errorHandler(err: unknown) {
  if (err instanceof ServerError) {
    return NextResponse.json(
      {
        message: err.message,
      },
      { status: err.status }
    );
  }
  if (err instanceof Error) {
    return NextResponse.json(
      {
        message: err.message ?? "Internal server error",
      },
      { status: err.message === "jwt expired" ? 401 : 500 }
    );
  }
}

export function decryptToken(token: string, secret: string) {
  return <JWTPayload>verify(token, secret);
}
