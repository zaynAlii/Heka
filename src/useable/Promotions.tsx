
"use client"
import Typewriter from 'typewriter-effect';


import React from 'react'
import Image from 'next/image'
import img1 from "/assets/promotiopnsec/blue.jpg"
import img2 from "/assets/promotiopnsec/img3.jpg"
import img4 from "/assets/promotiopnsec/img2.avif"
import { Button } from '@/components/ui/button';
import img3 from "/assets/promotiopnsec/jac.jpg"
const Promotions = () => {
    return (
        <div className=''>


            <h2 className='text-center mt-20'><small className='text-purple-700 text-center'> Promotions</small></h2>
            <h1 className="scroll-m-20 text-2xl text-center mt-3 font-extrabold   tracking-[2px] lg:text-3xl">
                <Typewriter
                    options={{
                        strings: ['Our Promotion Events'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <div className='flex md:flex-wrap  sm:flex-col md:flex-row  sm:items-center md:items-start md:justify-center  mt-10'>

                <Image
                    src={"/assets/promotiopnsec/blue.jpg"}
                    className='h-[300px] w-[350px] object-contain border-l-4 border-cyan-400'
                    alt=""
                    width={400}
                    height={400}



                />
                <Image
                    className='h-[300px] w-[350px] object-contain border-l-4 border-cyan-400'
                    src={"/assets/promotiopnsec/img3.jpg"}
                    alt=""
                    width={400}
                    height={400}



                />
                <Image
                    className='h-[300px] w-[350px] object-contain '
                    src={"/assets/promotiopnsec/jac.jpg"}
                    alt=""
                    width={400}
                    height={400}
                />


                <div className=' w-[430px] self-center  md:ml-3 lg:ml-3 bg-black mt-6'>

                    <h1 className="text-white  scroll-m-20 text-2xl text-center mt-10 font-extrabold   tracking-[2px] lg:text-3xl">
                        <Typewriter
                            options={{
                                strings: ['GET UP TO 60%', 'For the summer season'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                    <div className='  w-[430px] border  mt-10  md:block  bg-black/20  pt-1 '>
                        <h1 className="text-white  scroll-m-20 text-2xl text-center mt-10 font-extrabold   tracking-[2px] lg:text-xl">
                            GET 30% Off
                            USE PROMO CODE
                            <Button className="tracking-[2px] mt-4"> DINEWEEKENDSALE</Button>
                        </h1>
                    </div>

                </div>
                <Image
                    className='h-[300px]  w-[350px] object-contain mt-6'
                    src={"/assets/promotiopnsec/img2.avif"}
                    alt=""
                    width={400}
                    height={400}
                />


            </div>

        </div>
    )
}

export default Promotions