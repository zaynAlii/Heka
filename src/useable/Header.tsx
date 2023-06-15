"use client"
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { RxCross2 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
export const Header = () => {
    const  cartValue=useSelector((state:RootState)=>state.cart.TotalQuantity)
    const [showN, setN] = useState("hidden");

    const handleClick = () => {
        setN(" absolute block z-20 ");

    }
    const handleClickClose = () => {
        setN("hidden");

    }


    return (
        <div>

            <header>

                <nav className=' sm:mx-8  md:mx-20   md:flex  md:items-center md:justify-center mt-6 '>
                    <div className='flex items-center  gap-2 flex-shrink-0'>
                        <Image
                            src={"/assets/img/l4.jpeg"}
                            alt="Louis"
                            width={300}
                            height={300}
                            className='w-[60px]  h-[60px] object-contain rounded-full '
                        />
                        <h2 className="scroll-m-20  sm:flex-shrink-0 md:flex-shrink  text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                            Dine Market
                        </h2>
                        <FaBars
                            // className='sm:relative left-[400px] md:hidden mr-9'
                            className='ml-auto md:hidden'
                            onClick={handleClick}
                        />

                    </div>

                    <div className={`${showN}  sm:bg-blue-300 sm:pl-4 sm:pb-3 md:pb-0 md:pl-0 md:bg-transparent  w-[370px] sm:top-0 sm:left-[50px] sm:mt-24 md:block  md:relative md:top-0 md:left-0 md:ml-6 md:mt-0 lg:ml-14  `}>
                        <RxCross2
                            className='sm:relative right-14 text-red-800 text-2xl  md:hidden'
                            onClick={handleClickClose}

                        />
                        <ul className='flex sm:flex-row gap-1 md:flex-row md:gap-0 lg:gap-10'>
                            <Link href="/female" className='hover:border-b-2 hover:border-black w-20' >Female</Link>
                            <Link href="/male" className='hover:border-b-2 hover:border-black w-20' >Male</Link>
                            <Link href="/kids" className='hover:border-b-2 hover:border-black w-20' >Kids</Link>
                            <Link href="/all-product" className='hover:border-b-2 hover:border-black w-20' >AllProducts</Link>

                        </ul>
                    </div>
                    <div className={`${showN} sm:hidden top-[180px] left-[450px] md:relative  md:left-0 md:top-0  md:flex   md:items-center  `}>
                        <FiSearch
                            className='  sm:relative sm:top-7 sm:left-2 md:left-8  md:top-0 lg:left-10 '
                        />
                        <input type="search" name="" id="" className='outline-none border md:mx-3  lg:mx-5 md:w-[150px] border-black pl-6 p-2 lg:w-[380px] rounded-xl' placeholder='Search The Product' />
                        <div>
                             
                            <AiOutlineShoppingCart
                                className=' sm:relative sm:left-64 sm:bottom-[40px] md:bottom-0 md:left-0 text-2xl  border  border-emerald-400 w-8 p-1   h-10 rounded-full'
                            /> 
                            <span className=' absolute top-0 right-[-10px] text-green-600 px-2 bg-red-500 rounded-full text-sm w-7 h-7 text-center'>{cartValue}</span>
                        </div>
                        {/* <input type="number" name="" className=' lg:absolute  lg:w-9 lg:right-[87px]' value={0} id="" /> */}
                    </div>


                </nav>

            </header>

        </div>
    )
}
