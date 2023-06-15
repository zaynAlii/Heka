import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import img1 from "/assets/promotiopnsec/img2.avif"
const secondL = () => {
    return (
        <div className='mt-20 '>

           <div className='flex justify-center  '>
            <h1 className="scroll-m-20 text-2xl text-center mt-3  font-extrabold lg:w-[400px]   tracking-[2px] lg:text-2xl">
                Unique and Authentic Vintage Designer Jewellery
            </h1>
           </div>
            {/* <div className='flex ml-[6rem]  md:justify-center  flex-wrap my-10 gap-4 bg-slate-300'> */}
            <div className='flex md:p-10 sm:p-10    md:justify-center  flex-wrap my-10 gap-4 bg-slate-100'>
                <div className='flex gap-7 sm:flex-wrap md:flex-nowrap'>

                    <div className='sm:w-[100%] lg:w-[370px] xl:w-[250px]'>
                        <h2 className='text-md font-bold '>Using Good Quality Materials</h2>
                        <p className= 'lg:w-auto xl:w-[200px]  mt-2 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        <h2 className=' text-md font-bold mt-7'>Modern Fashion Design</h2>
                        <p className='lg:w-auto xl:w-[200px]  mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className='sm:w-[100%] lg:w-[50%] xl:w-[250px]'>
                        <h2 className='text-md font-bold'>100% Handmade Products
                        </h2>
                        <p className=' lg:w-auto xl:w-[200px] mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        <h2 className='text-md font-bold mt-7'>Discount for Bulk Orders
                        </h2>
                        <p className=' lg:w-auto xl:w-[200px] mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex xl:gap-3 lg:gap-8 md:mt-4 lg:mt-5 sm:gap-7 sm:flex-wrap md:flex-row '>

                    <div className=''>
                        <Image
                            className=' sm:w-[200px] sm:h-[200px]  lg:w-[400px] lg:[400px] xl:w-[300px] xl:h-[350px] object-cover'
                            src={"/assets/promotiopnsec/img2.avif"}
                            alt=''
                            width={400}
                            height={400}

                        />
                    </div>
                    <div className=''>
                        <p className='w-[300px] xl:mt-5'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button className='mt-4'>See All Products</Button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default secondL