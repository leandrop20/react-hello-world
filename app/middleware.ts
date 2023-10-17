import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    return NextResponse.redirect('/auth/login');
}

export const config = {
    matcher: [
        
    ],
};

// import { getToken } from "next-auth/jwt";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// export async function middleware(request: NextRequest, _next: NextFetchEvent) {
//   const { pathname } = request.nextUrl;
//   const protectedPaths = ["/admin"];
//   const matchesProtectedPath = protectedPaths.some((path) =>
//     pathname.startsWith(path)
//   );
//   if (matchesProtectedPath) {
//     const token = await getToken({ req: request });
//     if (!token) {
//       const url = new URL(`/signin`, request.url);
//       url.searchParams.set("callbackUrl", encodeURI(request.url));
//       return NextResponse.redirect(url);
//     }
//     if (token.role !== "admin") {
//       const url = new URL(`/403`, request.url);
//       return NextResponse.rewrite(url);
//     }
//   }
//   return NextResponse.next();
// }