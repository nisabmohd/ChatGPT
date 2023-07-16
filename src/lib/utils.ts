import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Configuration, OpenAIApi } from "openai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOpenAIApiInstance(apiKey: string) {
  const configuration = new Configuration({
    apiKey,
  });
  return new OpenAIApi(configuration);
}
