import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;

  if (pathname == "/post" || pathname == "/category") {
    return NextResponse.redirect("/");
  }
  return NextResponse.next();
}
