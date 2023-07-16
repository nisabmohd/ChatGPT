import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const token = request.cookies.get("accessToken")?.value;

  if (
    !pathname.startsWith("/api") &&
    !(pathname == "/auth/login" || pathname == "/auth/signup") &&
    !token
  ) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  if (
    !pathname.startsWith("/api") &&
    (pathname == "/auth/login" || pathname == "/auth/signup") &&
    token
  ) {
    url.pathname = "/chat";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/api")) {
    if (
      !(pathname == "/api/auth/login" || pathname == "/api/auth/signup") &&
      !token
    ) {
      return NextResponse.json(
        {
          message: "Unauthorised",
        },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
