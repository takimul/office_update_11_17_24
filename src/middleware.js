import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const token = cookies(request).get("__Secure-next-auth.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
  return NextResponse.next();
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: [],
};
