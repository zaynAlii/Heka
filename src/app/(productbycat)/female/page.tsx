import React from 'react'
import Product from '@/app/pcomponets/product'
import { ProductData } from '@/data/imageProductdata'
import Link from 'next/link'
type  tFemalearray={
    name: string,
    price: string,
    img: string,
    productDetails:string,
    productCare:string[],
    cat?:string,
    picks:string
}
export  default function Female(){
    let femalearray:tFemalearray[] =[];
    femalearray=ProductData().filter((ele)=> ele.cat==="female");
  return (
    <div className='flex  flex-wrap mx-20 justify-evenly  mt-14  my-20'>
           {
            femalearray.map((obj , i)=>{
                let img=obj.img;
                img=img+"-1"
                let modifier:string=obj.name;
                  modifier=modifier.replace(/\s+/g,"-");
                 return (
                    <div className='hover:scale-110 transition-all ease-out duration-300 ' key={i+"o"}>
                        <Link href={`/Product/${modifier}`} className='hover:scale-110 transition-all ease-out duration-300'>   <Product img={img} name={obj.name} price={obj.price}/> </Link>
                    </div>
                 )

            })
           }


    </div>
  )
}
