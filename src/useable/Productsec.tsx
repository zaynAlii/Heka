"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from "typewriter-effect"
import Product from '@/app/pcomponets/product'
// import img1 from "../assets/productsec/img1.jpg"
// import img2 from "../assets/productsec/img2.jpg"
// import img3 from "../assets/productsec/img3.jpg"
// import img4 from "../assets/productsec/img4.jpg"
import Link from 'next/link'
// console.log(img1);
export const Productsec = () => {
    return (
        <div className='mt-[6rem]  '>

            <h2 className='text-center mt-20'><small className='text-purple-700 text-center'> Product</small></h2>
            <h1 className="scroll-m-20 text-2xl text-center mt-4 font-extrabold   tracking-[2px] lg:text-3xl">
                <Typewriter
                    options={{
                        strings: ['Check What We Have'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div className='flex  flex-wrap mx-24 justify-evenly  mt-14 '>
            {/* <div className='grid mt-14 mx-28   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '> */}

              <Link href="/Product/Brushed-Raglan-Sweatshirt" className='hover:scale-110 transition-all ease-out duration-300'>  <Product  img={"img1-1"} name="Brushed Raglan Sweatshirt" price="$159" /> </Link>
              <Link href="/Product/Cameryn-Sash-Tie-Dress" className='hover:scale-110 transition-all ease-out duration-300'>  <Product img={"img2-1"} name="Cameryn Sash Tie Dress" price="$459" /></Link>
              <Link href="/Product/Flex-shirts" className='hover:scale-110 transition-all ease-out duration-300'> <Product img={"img3-1"} name="Flex shirts" price="$259" /></Link>
              {/* <Link href="/Product/Flex-jeans-pants" className='hover:scale-110 transition-all ease-out duration-300'> <Product img={"img4-1"} name="Flex jeans pants" price="$559" /></Link> */}
              {/* <Link href="/Product/Red-bulnero-stuff" className='hover:scale-110 transition-all ease-out duration-300'> <Product img={"img5-1"} name="Red bulnero stuff" price="$1059" /></Link> */}
            </div>

            {/* <div className='flex flex-wrap justify-center mt-14  '>
                <div className='mb-5 hover:scale-110 transition-all ease-out duration-300'>

                    <Image
                        src={img1}
                        alt="img"
                        width={400}
                        height={400}
                        className='w-[300px] h-[350px] object-cover'
                    />
                    <h2 className='text-lg mt-2  text-center'>Brushed Raglan Sweatshirt

                    </h2>
                    <p className=' font-extrabold text-center'>$195</p>
                </div>
                <div className='mb-5 hover:scale-110 transition-all ease-out duration-300'>

                    <Image
                        src={img2}
                        alt="img"
                        width={400}
                        height={400}
                        className='w-[300px] h-[350px] object-contain'
                    />
                    <h2 className='text-lg mt-2 text-center '>Cameryn Sash Tie Dress



                    </h2>
                    <p className=' font-extrabold text-center'>$545</p>
                </div>
                <div className='mb-5 hover:scale-110 transition-all ease-out duration-300'>

                    <Image
                        src={img3}
                        alt="img"
                        width={400}
                        height={400}
                        className='w-[300px] h-[350px] object-cover'
                    />
                    <h2 className='text-lg mt-2 text-center '>Flex Sweatshirt



                    </h2>
                    <p className=' font-extrabold text-center'>$175</p>
                </div>
                <div className='mb-5 hover:scale-110 transition-all ease-out duration-300'>

                    <Image
                        src={img4}
                        alt="img"
                        width={400}
                        height={400}
                        className='w-[300px] h-[350px] object-contain'
                    />
                    <h2 className='text-lg mt-2 text-center '>Flex jeans& Jacket

                    </h2>
                    <p className=' font-extrabold text-center'>$395</p>

                </div>


            </div> */}
        </div>
    )
}
