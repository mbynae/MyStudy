import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('미들웨어 실행중');
    if (request.nextUrl.pathname.startsWith('/product/1234')) {
        console.log('특정 미들웨어 실행');
        return NextResponse.redirect(new URL('/product', request.url));
    }
}

export const config = {
    matcher: ['/product/:path*'],
};
