
'use client';

import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

export default function LoadingSkeleton() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 space-y-6">
            {/* Title Skeleton */}
            <Skeleton className="h-8 w-2/3" />

            {/* Smaller skeletons */}
            <div className="space-y-2 w-full max-w-md">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Button Skeleton */}
            <Skeleton className="h-10 w-32" />
        </div>
    );
}
