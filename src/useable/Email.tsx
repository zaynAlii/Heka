import React from 'react'
import { Button } from '@/components/ui/button'
const Email = () => {
  return (
    <div className='flex h-[400px]  justify-center mt-14 p-20 items-center'>
      <div>

        <h1 className='text-3xl mb-4 font-extrabold'>Subscribe Our Newsletter</h1>
        <p className='mb-5'>Get the latest information and promos offers directly</p>
        <div className='flex justify-center md:flex-row sm:flex-col '>
          <input type="email" className='md:w-[300px] sm:w-full sm:mb-2 md:mb-0 border border-black p-2 mr-2 outline-none' name="" id="" placeholder='Input email adress ' />
          <Button>Get started</Button>
        </div>

      </div>
    </div>
  )
}

export default Email