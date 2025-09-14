import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default async function middleware(req: Request) {
  const session = await auth(); // cek session
  const url = new URL(req.url);

  const protectedPaths = [
    /\/shipping-address/,
    /\/payment-method/,
    /\/place-order/,
    /\/profile/,
    /\/user\/(.*)/,
    /\/order\/(.*)/,
    /\/admin/,
  ];

  // kalau belum login → redirect ke sign-in
  if (!session && protectedPaths.some((path) => path.test(url.pathname))) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // kalau tidak ada sessionCartId → buat cookie
  const cookies = req.headers.get("cookie") ?? "";
  if (!cookies.includes("sessionCartId")) {
    const res = NextResponse.next();
    res.cookies.set("sessionCartId", crypto.randomUUID());
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
