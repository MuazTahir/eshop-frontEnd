
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import React from 'react'

function CommonForm({ ControlForm, formData, setFormData, onSubmit, buttonText }) {

    function renderInputById(getcontrolItem) {
        let element = null;
        const value = formData[getcontrolItem.name]

        switch (getcontrolItem.componentType) {
            case "input":
                element = (
                    <div>
                        <label htmlFor={getcontrolItem.name} className='text-gray-700 font-medium '>
                            {
                                getcontrolItem.label
                            }
                        </label>

                        <Input

                            name={getcontrolItem.name}
                            placeholder={getcontrolItem.placeholder}
                            id={getcontrolItem.name}
                            type={getcontrolItem.type}
                            value={value}
                            onChange={
                                event => setFormData({
                                    ...formData,
                                    [getcontrolItem.name]: event.target.value
                                })
                            }
                        />
                    </div>
                )

                break;
            case "select":
                <Select
                    onValueChange={
                        (value) => setFormData({
                            ...formData,
                            [getcontrolItem.name]: value
                        })
                    }
                    value={value}>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder={getcontrolItem.label} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            getcontrolItem.options && getcontrolItem.options.length > 0 ?
                                getcontrolItem.options.map(optionItem => (
                                    <SelectItem key={optionItem.id} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                )) : null
                        }
                    </SelectContent>
                </Select>

                break;
            case "textarea":
                element = (
                    <Textarea
                        name={getcontrolItem.name}
                        placeholder={getcontrolItem.placeholder}
                        id={getcontrolItem.id}
                        value={value}
                        onChange={
                            event => setFormData({
                                ...formData,
                                [getcontrolItem.name]: event.target.value
                            })
                        }

                    />
                )

                break;

            default:
                element = (
                    <Input
                        name={getcontrolItem.name}
                        placeholder={getcontrolItem.placeholder}
                        id={getcontrolItem.name}
                        type={getcontrolItem.type}
                        value={value}
                        onChange={
                            event => setFormData({
                                ...formData,
                                [getcontrolItem.name]: event.target.value
                            })
                        }
                    />
                )
                break;
        }
        return element

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3'>
                {
                    ControlForm.map(controlItem =>
                        <div key={controlItem.name}>
                            {
                                renderInputById(controlItem)
                            }
                        </div>)
                }
            </div>
            <Button type="submit" className='w-full mt-2 bg-[#002626]'>{buttonText || 'Submit'}</Button>

        </form>
    )
}

export default CommonForm