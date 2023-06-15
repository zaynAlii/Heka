import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import img1 from "/assets/img/her0bus.png"
import img3 from "/assets/img/heroL1.png"
import img2 from "/assets/img/herob2.png"
import Hero from "/assets/img/herosecbgr.png"
export const HeroSec = () => {
    return (
        <div className='my-[2rem] ml-[4rem] mr-[1rem]    md:my-[2rem] md:ml-[14rem]   lg:my-[2rem] lg:mx-[9rem]'>

            <div className='flex  h-[660px] gap-6 items-center justify-center mx-auto '>
                <div className='self-start mt-20 '>
                    <Button className="outline-none   bg-gradient-to-r from-cyan-300  via-blue-300 to-orange-300">Sale 70%</Button>
                    <div className='mt-20   '>
                        <h1 className="scroll-m-20 text-4xl md:leading-[40px] lg:leading-[50px] text-[#484a48] font-extrabold md:tracking-[3px] lg:tracking-[3px] lg:text-5xl">
                            An Industrial Take on Streetwear
                        </h1>
                    </div>
                    <p className='mt-10 w-[400px]'>
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </p>

                    <Button className='mt-10 hover:scale-105 transition-all ease-out duration-150 '> Start Shopping</Button>
                    <div className='flex md:mt-20 md:gap-9 sm:mt-10 gap-4 items-start flex-wrap lg:flex-nowrap'>

                        <Image
                            className='w-[150px] h-[30px]  rounded-md'
                            src={"/assets/img/her0bus.png"}
                            alt="Shopping"
                            width={400}
                            height={400}
                        />
                        <Image
                            className='w-[150px] h-[60px]  rounded-md'
                            src={"/assets/img/heroL1.png"}
                            alt="Shopping"
                            width={400}
                            height={400}
                        />
                        <Image
                            className='w-[150px] h-[100px]  rounded-md'
                            src={"/assets/img/herob2.png"}
                            alt="Shopping"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <div className='  lg:self-start lg:left-[490px]  lg:w-[30%]  lg:rounded-full  lg:z-[-1] lg:h-[60%] lg:bg-black/20 lg:absolute'>
                </div>
                <Image
                    className='sm:hidden md:block md:w-[70%] md:h-[70%]  md:rounded-md'
                    src={"/assets/img/herosecbgr.png"}
                    alt="Shopping"
                    width={400}
                    height={400}
                />

            </div>

        </div>
    )
}
