import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = await getToken({
    req: request,
    secret: "JGoJn04tbtsVlN6RmuRYJDHunFDas2k75uplcLlAyGU=",
  });

  // Only run this middleware for admin routes
  if (path.startsWith("/admin")) {
    try {
      // If there's no token, redirect to login
      if (!token) {
        console.log("No token found, redirecting to login");
        return NextResponse.redirect(new URL("/login", request.url));
      }

      console.log("User authenticated, proceeding to admin route");
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For all other routes, or if authenticated for admin routes, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
