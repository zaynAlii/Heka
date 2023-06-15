import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import img1 from "/assets/img/lo3.jpeg"
export const Foot = () => {
  return (
    <div className=''>


      <div className='flex  gap-2 bg-slate-950  text-slate-500   px-14 py-24  justify-center sm:flex-col md:flex-row md:flex-wrap lg:flex-nowrap'>
        <div className='flex w-[25%]  flex-col '>
          <div className=''>
            <div className='flex items-center'>

              <Image
                src={"/assets/img/lo3.jpeg"}
                alt='img'
                className='w-[50px]  h-[60px] object-contain rounded-full '
                width={300}
                height={300}
              />
              <h1 className='text-2xl ml-2 font-extrabold'>
                Dine Market
              </h1>
            </div>
            <p className='sm:w-[300px] md:w-[200px] lg:w-[300px] border-l-2 border-green-700 pl-3 my-5'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          </div>
          <div className='flex gap-4 mt-4'>

            <i><svg xmlns="http://www.w3.org/2000/svg" className='text-black' width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M16-.034C7.159-.034-.035 7.158-.035 16S7.159 32.034 16 32.034S32.035 24.842 32.035 16S24.841-.034 16-.034zm0 31C7.748 30.966 1.035 24.252 1.035 16S7.748 1.034 16 1.034S30.965 7.748 30.965 16S24.252 30.966 16 30.966z" /><path d="M19.5 7h-2.668C13.434 6.966 13 9.069 13 11.345V13h-1.5a.445.445 0 0 0-.5.5v3a.445.445 0 0 0 .5.5H13v7.5a.449.449 0 0 0 .503.5h3.055c.295.034.534-.205.44-.5L17 17h2.5a.445.445 0 0 0 .5-.5v-3a.445.445 0 0 0-.5-.5h-2.503L17 11.5c.097-.639.097-.535.69-.5h1.789c.139-.031.287-.014.391-.115c.104-.101.164-.239.129-.385v-3A.444.444 0 0 0 19.5 7zm-.535 2.944l-1.254-.048c-1.553 0-1.683.843-1.683 1.706l-.004 1.896a.534.534 0 0 0 .534.535H19v1.932h-2.44a.535.535 0 0 0-.535.534L16.024 24H14v-7.5c0-.295-.201-.534-.497-.534H12v-1.932h1.503a.534.534 0 0 0 .378-.156c.1-.101.118-.237.118-.379v-2.155c0-2.242.453-3.31 2.832-3.31h2.133v1.91z" /></g></svg></i>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="currentColor"><path d="M16-.034C7.159-.034-.035 7.158-.035 16S7.159 32.034 16 32.034S32.035 24.842 32.035 16S24.841-.034 16-.034zm0 31C7.748 30.966 1.035 24.252 1.035 16S7.748 1.034 16 1.034S30.965 7.748 30.965 16S24.252 30.966 16 30.966z" /><path d="M24.794 11.046a3.73 3.73 0 0 0 .273-.643a.535.535 0 0 0-.781-.623a6.033 6.033 0 0 1-1.646.673a3.831 3.831 0 0 0-2.562-.987a3.82 3.82 0 0 0-3.814 3.973a8.821 8.821 0 0 1-5.735-3.178a.536.536 0 0 0-.876.07a3.813 3.813 0 0 0-.066 3.721a.628.628 0 0 0-.214.078a.571.571 0 0 0-.264.481c0 1.135.505 2.177 1.319 2.885l-.035.035a.534.534 0 0 0-.108.518a3.816 3.816 0 0 0 2.184 2.365a6.134 6.134 0 0 1-3.406.579a.545.545 0 0 0-.566.352a.536.536 0 0 0 .215.63a9.841 9.841 0 0 0 5.319 1.559c6.18 0 9.874-5.02 9.874-9.873l-.001-.164a7.122 7.122 0 0 0 1.541-1.66a.535.535 0 0 0-.651-.791zm-1.745 1.755a.535.535 0 0 0-.222.461c.006.132.009.266.009.398c0 4.328-3.293 8.805-8.804 8.805a8.76 8.76 0 0 1-2.887-.488a7.073 7.073 0 0 0 3.045-1.39a.535.535 0 0 0-.32-.955a2.752 2.752 0 0 1-2.194-1.162c.253-.017.501-.059.742-.124a.534.534 0 0 0-.036-1.04a2.741 2.741 0 0 1-2.081-1.905c.266.067.539.106.812.115c.235-.001.453-.145.526-.371s-.013-.475-.212-.607a2.746 2.746 0 0 1-1.143-2.945a9.883 9.883 0 0 0 6.568 2.972c.176.001.33-.062.437-.191s.148-.3.11-.464a2.75 2.75 0 0 1 4.682-2.506a.535.535 0 0 0 .494.159c.165-.033.328-.071.489-.115a2.538 2.538 0 0 1-.226.151a.535.535 0 0 0 .338.988l.182-.023a5.605 5.605 0 0 1-.309.237z" /></g></svg></i>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z" /></svg>
            </i>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.55 0 10 4.5 10 10s-4.5 10-10 10s-10-4.5-10-10s4.5-10 10-10Zm0 2c-4.395 0-8 3.605-8 8s3.605 8 8 8s8-3.605 8-8c0-4.414-3.573-8-8-8Zm3.75 12.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2Zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25ZM6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75Z" /></svg></i>

          </div>
        </div>
        <div className='sm:w-[300px] md:w-[25%] pl-3 border-l-2 border-gray-600 sm:mt-4 md:mt-0'>
          <h1 className='text-xl ml-2 font-extrabold'>Company
          </h1>
          <p className=' mt-4  text-gray-400'>
            About</p>
          <p className='my-2 text-gray-400'> Terms of Use </p>
          <p className='my-2 text-gray-400'>
            Privacy Policy
          </p>
          <p className='my-2 text-gray-400'>
            How it Works
          </p>
          <p className='my-2 text-gray-400'>
            Contact Us
          </p>
        </div>
        <div className='sm:w-[300px] md:w-[25%] pl-3  border-l-2 border-gray-600 sm:mt-4 md:mt-0'>
          <h1 className='text-xl ml-2 font-extrabold'>
            Support

          </h1>
          <p className='mt-4 text-gray-400'> 
            Support Carrer
          </p>
          <p className='my-2 text-gray-400'> Terms of Use </p>
          <p className='my-2 text-gray-400'>
            24h Service
          </p>
          <p className='my-2 text-gray-400'>
            Quick Chat
          </p>

        </div>
        <div className='sm:w-[300px] md:w-[25%] pl-3 border-l-2 border-gray-600 sm:mt-4 md:mt-0'>
          <h1 className='text-xl ml-2 font-extrabold'>
            Contact

          </h1>
          <p className='my-2 text-gray-400'>

            Whatsapp
          </p >
          <p className='my-2 text-gray-400'> Terms of Use </p>
          <p className='my-2 text-gray-400'>

            Support 24
          </p>
        </div>
        <div className='border border-'></div>
      </div>

      <div className='grid sm:grid-cols-1 text-sm  md:grid-cols-3 p-14 bg-slate-900 text-white'>
        <div className='text-center  md:my-0'>Copyright © 2022 Dine Market</div>
        <div className='text-center text-lg sm:my-2 md:my-0'>Design by <b> Weird Design Studio</b> </div>
        <div className='text-center  md:my-0'>Code by. <b>ZAin</b>  on github</div>

      </div>

    </div>
  )
}
