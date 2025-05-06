'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

function ShoppingProductTilt({ product }) {
    return (
        <Card className="overflow-hidden shadow-md rounded-2xl">
            <div className="relative w-full h-[200px]">
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-1">{product?.title}</h2>
                <div className="flex items-center gap-2">
                    <span
                        className={`text-base font-medium text-gray-700 ${product?.salePrice ? 'line-through' : ''}`}
                    >
                        ${product?.price}
                    </span>
                    {product?.salePrice && (
                        <span className="text-base font-bold text-green-600">
                            ${product?.salePrice}
                        </span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

export default ShoppingProductTilt;
