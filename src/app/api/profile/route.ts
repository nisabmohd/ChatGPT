import { prisma } from "@/db/config";
import { JWTPayload } from "@/lib/types";
import { decryptToken, errorHandler } from "@/lib/utils";
import { sign } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const editSchema = z
  .object({
    username: z.string(),
    apiKey: z.string(),
    avatar: z.string(),
  })
  .partial()
  .strict();

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { apiKey, avatar, username } = editSchema.parse(body);
    const token = req.cookies.get("accessToken")!.value!;
    const { userId } = decryptToken(token, process.env.JWT_SECRET!);
    const obj = { ...body };
    for (let key in obj) {
      if (obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    }
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...obj,
      },
    });
    const userCopy = {
      ...user,
      apiKey: undefined,
      password: undefined,
    };
    if (!apiKey) {
      return NextResponse.json(userCopy);
    }
    const refreshTokenPrevious = req.cookies.get("refreshToken")!.value!;

    const findToken = await prisma.token.findFirst({
      where: {
        token: refreshTokenPrevious,
      },
    });
    await prisma.token.delete({
      where: { id: findToken!.id },
    });

    const payload: JWTPayload = { userId, apiKey };
    const accessToken = sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "50m",
    });
    const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET!);
    await prisma.token.create({
      data: {
        token: refreshToken,
      },
    });
    return new Response(JSON.stringify(userCopy), {
      status: 200,
      headers: {
        "Set-Cookie": `accessToken=${accessToken};Secure;HttpOnly;path=/,refreshToken=${refreshToken};Secure;HttpOnly;path=/`,
      },
    });
  } catch (err) {
    console.log(err);

    return errorHandler(err);
  }
}
