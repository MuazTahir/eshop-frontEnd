import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

function AdminProductTilt({
    product,
    setFormData,
    setopenCreateProductDialog,
    setcurrentEditId,
    deleteHandle,
}) {
    return (
        <Card className="">
            <div className="relative w-full h-[200px]">
                {/* Image taking the majority of the card height */}
                <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>
            <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
                <div className="flex justify-between items-center mb-2">
                    <span
                        className={`${product?.salePrice > 0 ? 'line-through' : ''
                            } text-lg font-semibold text-primary`}
                    >
                        ${product?.price}
                    </span>
                    {product?.salePrice && (
                        <span className="text-lg font-bold">${product?.salePrice}</span>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
                <Button
                    className='bg-[#0f825c]'
                    onClick={() => {
                        setopenCreateProductDialog(true);
                        setFormData(product);
                        setcurrentEditId(product?._id);
                    }}
                >
                    Edit
                </Button>
                <Button className='bg-[#8e1f2a]' onClick={() => deleteHandle(product._id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
}

export default AdminProductTilt;
