"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/slice/cartSlice';

const ProductDetails = ({ img, name, price, productDetails, productCare, picks }: { picks: string, img: string, name: string, price: string, productDetails: string, productCare: string[] }) => {

    const dispatch=useDispatch();
     const cartcounter=()=>
     {
       dispatch(cartActions.AddtoCart({quantity:1}))
     }

    const [imgvalue, setimgvalue] = useState(img + "-1")
    const [count, setcount] = useState(1);
    let priceofProduct: number = Number(price)
    let [pricee, setPrice] = useState(priceofProduct);
    const countHndlerminus = () => {
        if (count > 1) {
            setcount(count - 1);
            setPrice(pricee - priceofProduct);
        }
    }
    const [active, setActive] = useState(Array(5).fill(""));

    const filled = active.slice();
    const handler = (j: number) => {

        if (active[j] === "") {
            filled[j] = "bg-black text-white"
        }
        else {
            filled[j] = ""
        }
        setActive(filled);
        for (let i = 0; i < active.length; i++) {
            if (i == j) {

            }
            else {
                filled[i] = ""
                setActive(filled)
            }

        }
    }







    const inghandler = (img: string, i: number) => {
        setimgvalue(`${img}-${i}`);
    }

    let imgessss = [];
    if (Number(picks) >= 1) {
        for (let i = 1; i <= Number(picks); i++) {
            imgessss[i] = <Image key={i}
                src={`/assets/productsec/${img}-${i}.jpg`}
                onMouseOver={() => inghandler(img, i)}
                alt='img'
                width={200}
                height={200}
                className={`w-[100px]   flex-1 my-2`}
            />

        }
    }


    return (
        <section className='border '>
            <div className='flex sm:mx-10  md:mx-0 lg:mx-0   flex-wrap   justify-center lg:gap-7  my-14'>
                <div className='flex gap-4'>
                    <div>
                        {
                            imgessss

                        }
                    </div>
                    <Image
                        src={`/assets/productsec/${imgvalue}.jpg`}
                        alt='img'
                        width={500}
                        height={500}
                        className='sm:w-[200px] sm:h-[300px]  md:w-[600px] md:h-[700px] rounded-md  object-contain'
                    />
                </div>

                <div className='mt-14'>
                    <h1 className="scroll-m-20 text-2xl  lg:leading-[50px] text-[#484a48]  font-semibold md:tracking-[2px] lg:tracking-[1px] ">
                        {name}
                    </h1>
                    <h1 className='text-gray-400 font-bold text-lg mb-7 '>Sweater</h1>

                    <p className=' uppercase font-semibold text-sm'>select size</p>

                    <div className='flex gap-4  mt-4'>
                        <p onClick={() => handler(0)} className={`border border-black p-2 ${active[0]}  cursor-pointer  flex-shrink-0 rounded-full w-10 text-center`}>xs</p>
                        <p onClick={() => handler(1)} className={`border border-black p-2 ${active[1]}  cursor-pointer  flex-shrink-0 rounded-full w-10 text-center`}>s</p>
                        <p onClick={() => handler(2)} className={`border border-black p-2 ${active[2]}  cursor-pointer  flex-shrink-0 rounded-full w-10 text-center`}>M</p>
                        <p onClick={() => handler(3)} className={`border border-black p-2 ${active[3]}  cursor-pointer  flex-shrink-0 rounded-full w-10 text-center`}>LG</p>
                        <p onClick={() => handler(4)} className={`border border-black p-2 ${active[4]}  cursor-pointer  flex-shrink-0 rounded-full w-10 text-center`}>XL</p>


                    </div>

                    <div className=' flex gap-6 mt-9 items-center'>
                        <h1 className='text-xl font-extrabold uppercase'>quantity</h1>
                        <div className='flex gap-4'>
                            <div onClick={countHndlerminus} className='border border-black p-1 w-8 text-center rounded-full cursor-pointer'>-</div>
                            <div className='text-xl '>{

                                (count > 0) && count

                            }</div>
                            <div onClick={() => { setcount(count + 1); setPrice(priceofProduct + pricee) }} className='border border-black p-1 w-8 text-center rounded-full cursor-pointer'>+</div>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-6 items-center '>

                        <Button className='' onClick={cartcounter}> Add to cart</Button>
                        <p className='text-xl font-extrabold p-2 tracking-[2px]'> ${pricee}.00 </p>
                    </div>
                </div>

            </div>

            <section className='sm:px-9 md:px-20    py-10 bg-gray-100 '>
                <div className='sm:px-9 md:px-[100px] py-20 bg-white  '>

                    <h3 className="scroll-m-20 text-xl font-semibold mb-14  ml-18  tracking-[2px]">
                        Product Information
                    </h3>
                    <div>
                        <div className='w-full h-[2px] bg-gray-300 mb-6 '></div>
                        <div className='flex sm:flex-wrap  md:flex-nowrap'>
                            <h3 className="md:w-2/5 text-gray-500 flex-shrink-0 scroll-m-20 text-xl font-semibold tracking-[1px]">
                                Product Details
                            </h3>
                            <div className='md:w-3/5 tracking-[1px] text-gray-600'>
                                {productDetails}
                            </div>
                        </div>
                        <div className='flex mt-10 sm:flex-wrap md:flex-nowrap '>
                            <h3 className="scroll-m-20 text-xl md:w-2/5 text-gray-500  font-semibold tracking-[1px]">
                                Product Cares
                            </h3>
                            <div className='md:w-3/5 tracking-[1px]'>
                                {productCare.map((ele, i) => {
                                    return (
                                        <li key={i} className=' font-semibold text-gray-600 '>{ele}</li>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ProductDetails