import { prisma } from "@/db/config";
import ServerError from "@/lib/types";
import { decryptToken, errorHandler } from "@/lib/utils";
import { sign } from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const c = req.cookies;
    const token = c.get("refreshToken")?.value;
    if (!token) throw new ServerError("Token not provided", 409);
    const dbToken = await prisma.token.findFirst({
      where: {
        token,
      },
    });
    if (!dbToken) throw new ServerError("Invalid token provided", 409);
    const { apiKey, userId } = decryptToken(
      token,
      process.env.JWT_REFRESH_SECRET!
    );

    const accessToken = sign({ apiKey, userId }, process.env.JWT_SECRET!, {
      expiresIn: "50m",
    });

    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: {
        "Set-Cookie": `accessToken=${accessToken};Secure;HttpOnly;path=/`,
      },
    });
  } catch (err) {
    return errorHandler(err);
  }
}
