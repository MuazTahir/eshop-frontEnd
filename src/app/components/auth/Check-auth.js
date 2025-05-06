



'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LoadingSkeleton from '../skeletonLoading';

export default function CheckAuth({ isAuthenticated, user, isLoading, children }) {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || isLoading) return;

        const isLoginPage = pathname === '/auth/Login';
        const isSignUpPage = pathname === '/auth/SignUp';
        const isAuthPage = isLoginPage || isSignUpPage;

        const isAdminRoute = pathname.startsWith('/admin');
        const isShoppingRoute = pathname.startsWith('/shoppingPanel');

        // 1. Not authenticated and not on auth pages -> redirect to login
        if (!isAuthenticated && !isAuthPage) {
            router.replace('/auth/Login');
            return;
        }

        // 2. Authenticated user trying to access login/signup page -> redirect based on role
        if (isAuthenticated && isAuthPage) {
            if (user?.role === 'admin') {
                router.replace('/admin/dashboard');
            } else {
                router.replace('/shoppingPanel/Home');
            }
            return;
        }

        // 3. Authenticated user with wrong role accessing wrong area
        if (isAuthenticated) {
            if (user?.role !== 'admin' && isAdminRoute) {
                router.replace('/not-found');
                return;
            }
            if (user?.role === 'admin' && isShoppingRoute) {
                router.replace('/admin/dashboard');
                return;
            }
        }


    }, [isAuthenticated, user, pathname, router, mounted, isLoading]);

    if (!mounted || isLoading) {
        return <LoadingSkeleton />;
    }

    return <>{children}</>;
}
