import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  console.log(req.cookies);
  
  // ambil cookie session bawaan next-auth
  const sessionCookie =
    req.cookies.get("authjs.session-token")?.value

  const protectedPaths = [
    /^\/shipping-address/,
    /^\/payment-method/,
    /^\/place-order/,
    /^\/profile/,
    /^\/user\/(.*)/,
    /^\/order\/(.*)/,
    /^\/admin/,
  ];

  // kalau belum login → redirect ke sign-in
  if (!sessionCookie && protectedPaths.some((p) => p.test(url.pathname))) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // kalau tidak ada sessionCartId → buat cookie baru
  if (!req.cookies.get("sessionCartId")) {
    const res = NextResponse.next();
    res.cookies.set("sessionCartId", crypto.randomUUID(), { path: "/" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/shipping-address",
    "/payment-method",
    "/place-order",
    "/profile",
    "/user/:path*",
    "/order/:path*",
    "/admin/:path*",
  ],
};
