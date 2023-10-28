import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest, _next: NextFetchEvent) {
    const { pathname } = request.nextUrl;
    const protectedPaths = ['/'];
    const matchesProtectedPath = protectedPaths.some((path) => 
        pathname.startsWith(path)
    );
    
    if (matchesProtectedPath) {
        const token = await getToken({ req: request });
        
        if (!token && !pathname.startsWith('/auth/login')) {
            const url = new URL('/auth/login', request.url);
            url.searchParams.set('callbackUrl', encodeURI(request.url));
            return NextResponse.redirect(url);
        }
        
        // if (token.role !== 'admin') {
        //     const url = new URL('/auth/login', request.url);
        //     return NextResponse.rewrite(url);
        // }

        if (token && pathname.startsWith('/auth/login')) {
            const url = new URL('/home', request.url);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/users/:path*',
        '/home/:path*',
        '/auth/login',
    ],
};