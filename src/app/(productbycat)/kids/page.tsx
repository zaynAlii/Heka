import React from 'react'
import Product from '@/app/pcomponets/product'
import { ProductData } from '@/data/imageProductdata'
import Link from 'next/link'
type tFemalearray = {
    name: string,
    price: string,
    img: string,
    productDetails: string,
    productCare: string[],
    cat?: string,
    picks: string
}

 const page = () => {

     
    
  
    let maleArray: tFemalearray[] = [];
    maleArray = ProductData().filter((obj) => obj.cat === "kids")


    return (
        <div className='flex  flex-wrap mx-20 justify-evenly  mt-14  my-20'>

            {
                maleArray.map((obj, i) => {
                    let img:string=obj.img;
                    img=img+"-1"

                    let modifier=obj.name;
                    modifier=modifier.replace(/\s+/g,"-")
                    return (
                        <div key={i+"i"} className='   hover:scale-110 transition-all ease-out duration-300 hover:border-l-2 border-cyan-400 hover:border-b-2'>
                            <Link href={`/Product/${modifier}`} className=''>   <Product img={img} name={obj.name} price={obj.price} /> </Link>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default page;
