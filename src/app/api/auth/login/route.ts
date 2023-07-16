import { prisma } from "@/db/config";
import { errorHandler } from "@/lib/utils";
import { NextRequest } from "next/server";
import { compareSync } from "bcrypt";
import { z } from "zod";
import { sign } from "jsonwebtoken";
import ServerError, { JWTPayload } from "@/lib/types";

const loginSchema = z
  .object({
    input: z.string(),
    password: z.string().min(8).max(16),
  })
  .strict();

export async function POST(req: NextRequest) {
  try {
    const { input, password } = loginSchema.parse(await req.json());
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ email: input }, { username: input }],
      },
    });
    if (!user) throw new ServerError("User does not exist", 409);
    const correctPassword = compareSync(password, user.password);
    if (!correctPassword) throw new ServerError("Wrong email or passwrod", 401);
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
    const userCopy = {
      ...user,
      apiKey: undefined,
      password: undefined,
    };
    return new Response(JSON.stringify(userCopy), {
      status: 200,
      headers: {
        "Set-Cookie": `accessToken=${accessToken};Secure;HttpOnly;path=/,refreshToken=${refreshToken};Secure;HttpOnly;path=/`,
      },
    });
  } catch (err) {
    return errorHandler(err);
  }
}
