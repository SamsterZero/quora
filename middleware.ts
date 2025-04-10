// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/login", "/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Dev token
  const devToken = req.cookies.get("next-auth.session-token")?.value;

  // Prod token
  const prodToken = req.cookies.get("__Secure-next-auth.session-token")?.value;

  const token = devToken || prodToken;

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Home/:path*",
    "/Profile/:path*",
    "/Settings/:path*",
    "/Discover/:path*",
    "/Notifications/:path*",
  ],
};