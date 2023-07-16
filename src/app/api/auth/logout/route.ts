import { prisma } from "@/db/config";
import ServerError from "@/lib/types";
import { errorHandler } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
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
    await prisma.token.delete({
      where: {
        id: dbToken.id,
      },
    });
    return NextResponse.json({ message: "Logged out user from server" });
  } catch (err) {
    return errorHandler(err);
  }
}
