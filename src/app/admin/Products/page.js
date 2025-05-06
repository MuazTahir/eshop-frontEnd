


'use client';
import Imageupload from '@/app/components/admin/imageUploader';
import AdminProductTilt from '@/app/components/admin/product-tilt';
import CommonForm from '@/app/components/common/Form';
import { addNewProduct, deleteProducts, fetchAllProducts } from '@/app/store/admin-Product-slice';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { addProductFormElements } from '@/config';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const initialState = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: ''
};

function AdminProducts() {
    const [openCreateProductDialog, setopenCreateProductDialog] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [imageFile, setImageFile] = useState(null);
    const [uploadImgURL, setUploadImgURL] = useState('');
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const [currentEditId, setcurrentEditId] = useState(null);

    const { productList } = useSelector(state => state.adminProducts);
    const dispatch = useDispatch();

    function onSubmit(event) {
        event.preventDefault();

        currentEditId !== null
            ? dispatch(editProducts({ id: currentEditId, formData }))
                .then((data) => {
                    if (data?.payload?.success) {
                        dispatch(fetchAllProducts());
                        setopenCreateProductDialog(false);
                        setFormData(initialState);
                        setcurrentEditId(null);
                    }
                })
            : dispatch(addNewProduct({ ...formData, image: uploadImgURL }))
                .then((data) => {
                    if (data?.payload?.success) {
                        dispatch(fetchAllProducts());
                        setopenCreateProductDialog(false);
                        setImageFile(null);
                        setFormData(initialState);
                        toast({ title: 'Product Added Successfully!' });
                    }
                });
    }

    function deleteHandle(getCurrentProductId) {
        dispatch(deleteProducts(getCurrentProductId))
            .then((data) => {
                if (data?.payload?.success) {
                    dispatch(fetchAllProducts());
                    toast({ title: 'Product is Deleted!', variant: 'destructive' });
                }
            });
    }

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <Fragment>
            <div className="relative w-full min-h-screen px-4 pt-4">
                {/* Fixed Add Product Button */}
                <div className=" top-20 right-4 z-10">
                    <Button className='bg-[#0E4749]' onClick={() => setopenCreateProductDialog(true)}>Add Product</Button>
                </div>

                {/* Product Grid */}
                <div className="pt-20">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {productList?.length > 0 &&
                            productList.map((productItem) => (
                                <div
                                    key={productItem._id}
                                    className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition-all"
                                >
                                    <AdminProductTilt
                                        deleteHandle={deleteHandle}
                                        setFormData={setFormData}
                                        setopenCreateProductDialog={setopenCreateProductDialog}
                                        setcurrentEditId={setcurrentEditId}
                                        product={productItem}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Add/Edit Product Drawer */}
            <Sheet
                open={openCreateProductDialog}
                onOpenChange={() => {
                    setopenCreateProductDialog(false);
                    setcurrentEditId(null);
                    setFormData(initialState);
                }}
            >
                <SheetContent side="right" className="max-w-md w-full overflow-y-auto max-h-screen p-4">
                    <SheetHeader>
                        <SheetTitle>
                            {currentEditId !== null ? 'Edit Product' : 'Add New Product'}
                        </SheetTitle>
                    </SheetHeader>

                    <Imageupload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadImgURL={uploadImgURL}
                        setUploadImgURL={setUploadImgURL}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        isEditMode={currentEditId !== null}
                    />

                    <div className="py-6 max-w-md w-full mx-auto">
                        <CommonForm
                            ControlForm={addProductFormElements}
                            formData={formData}
                            setFormData={setFormData}
                            onSubmit={onSubmit}
                            buttonText={currentEditId !== null ? 'Edit' : 'Add'}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    );
}

export default AdminProducts;
