import { prisma } from "@/db/config";
import { errorHandler } from "@/lib/utils";
import { NextRequest } from "next/server";
import { hashSync } from "bcrypt";
import { z } from "zod";
import { sign } from "jsonwebtoken";
import ServerError, { JWTPayload } from "@/lib/types";

const signupSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(6).max(12),
    password: z.string().min(8).max(16),
    apiKey: z.string(),
    avatar: z.string().optional(),
  })
  .strict();

export async function POST(req: NextRequest) {
  try {
    const { apiKey, email, password, username, avatar } = signupSchema.parse(
      await req.json()
    );
    let user = await prisma.user.findUnique({
      where: {
        email,
        username,
      },
    });
    if (user) throw new ServerError("User already exist", 409);
    user = await prisma.user.create({
      data: {
        apiKey,
        email,
        password: hashSync(password, 10),
        username,
        avatar,
      },
    });
    const payload: JWTPayload = { userId: user.id, apiKey: user.apiKey };
    const accessToken = sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "50m",
    });
    const refreshToken = sign(
      { id: user.id, apiKey: user.apiKey },
      process.env.JWT_REFRESH_SECRET!
    );
    await prisma.token.create({
      data: {
        token: refreshToken,
      },
    });
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Set-Cookie": `accessToken=${accessToken};Secure;HttpOnly;path=/,refreshToken=${refreshToken};Secure;HttpOnly;path=/`,
      },
    });
  } catch (err) {
    return errorHandler(err);
  }
}
