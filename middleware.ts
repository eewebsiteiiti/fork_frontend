import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip login page and API auth routes
  if (
    pathname === '/admin/login' ||
    pathname.startsWith('/api/auth/')
  ) {
    return NextResponse.next();
  }

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin_session')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const SECRET = new TextEncoder().encode(
        process.env.AUTH_SECRET || 'default-secret-change-in-production'
      );
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      // Token is invalid or expired
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_session');
      return response;
    }
  }

  // Protect API routes that modify data (POST, PUT, DELETE)
  if (
    pathname.startsWith('/api/') &&
    !pathname.startsWith('/api/auth/') &&
    ['POST', 'PUT', 'DELETE'].includes(request.method)
  ) {
    const token = request.cookies.get('admin_session')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      const SECRET = new TextEncoder().encode(
        process.env.AUTH_SECRET || 'default-secret-change-in-production'
      );
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
