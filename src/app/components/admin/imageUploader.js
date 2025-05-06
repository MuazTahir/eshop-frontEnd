

import React, { useEffect, useRef } from 'react'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function Imageupload({
    imageFile, setImageFile,
    uploadImgURL, setUploadImgURL,
    setImageLoadingState, imageLoadingState, isEditMode }) {

    const inputRef = useRef();
    function handleImageFileChange(event) {
        console.log(event.target.files);
        const imageHandle = event.target.files?.[0];
        if (imageHandle) setImageFile(imageHandle)

    }
    function onDragOverHandler(evt) {
        evt.preventDefault();
    }
    function onDropHandler(evt) {
        evt.preventDefault();
        const droppedfile = evt.dataTransfer.files;
        if (droppedfile.length > 0) {

            setImageFile(droppedfile[0])
        }

    }
    function handleRemoveImage() {
        setImageFile(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    async function uploadImageToCloudinary() {
        setImageLoadingState(true)
        const data = new FormData();
        data.append('my_file', imageFile);
        const response = await axios.post("http://localhost:5000/api/admin/upload-image", data);
        console.log(response, 'response')
        if (response?.data?.success) {
            setUploadImgURL(response.data.result.url)
            setImageLoadingState(false)
        }
    }

    useEffect(() => {
        if (imageFile !== null) uploadImageToCloudinary()
    }, [imageFile])


    return (
        <div className='w-full mx-w-md mx-auto mt-4'>
            <Label className='text-lg font-semibold mb-2 block'>Upload Images</Label>
            <div onDragOver={onDragOverHandler} onDrop={onDropHandler} className={`${isEditMode ? 'opacity-60' : ''} border-2 border-dashed p-4 rounded-lg`}>
                <input type="file" id='img-upload'
                    className='hidden'
                    ref={inputRef}
                    onChange={handleImageFileChange}
                    disabled={isEditMode}
                />
                {
                    !imageFile ?
                        <Label htmlFor='img-upload' className={`${isEditMode ? 'cursor-not-allowed' : ''} flex flex-col items-center justify-center cursor-pointer`}>
                            <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-2' />
                            <span>Drag & Drop / Click to Upload Image</span>
                        </Label>
                        :
                        imageLoadingState ?
                            <Skeleton className='h-9 bg-gray-100' /> :
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center'>
                                    <FileIcon className='h-8 w-8 text-primary mr-2' />
                                </div>
                                <p className='text-sm font-medium'>{imageFile.name}</p>
                                <Button variant='ghost' size='icon' className='text-muted-foreground hover:text-foreground' onClick={handleRemoveImage}>
                                    <XIcon className='w-3 h-3' />
                                    <span className='sr-only'>Remove File</span>
                                </Button>
                            </div>
                }
            </div>
        </div >
    )
}

export default Imageupload;