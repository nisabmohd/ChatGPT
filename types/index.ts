import { z } from "zod";

export const JsonMessageSchema = z.object({
  id: z.string(),
  answer: z.string().optional(),
  question: z.string(),
});

export const JsonMessagesArraySchema = z.array(JsonMessageSchema);

export type JSONMessage = z.infer<typeof JsonMessageSchema>;
