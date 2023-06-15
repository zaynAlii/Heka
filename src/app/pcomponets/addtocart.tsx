import React from 'react'
import { Button } from '@/components/ui/button'
const Addtocart = ({pricee}:{pricee:number}) => {
    return (
        <div className='flex gap-5 mt-6 items-center '>

            <Button className=''> Add to cart</Button>
            <p className='text-xl font-extrabold p-2 tracking-[2px]'> ${pricee}.00 </p>
        </div>
    )
}

export default Addtocart