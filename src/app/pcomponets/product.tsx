import React from 'react'
 import Image ,{StaticImageData} from 'next/image'
  
 type img={
    img?:StaticImageData;
    // name:string;
    // price:string;
 }

const product = ({img,name,price}:{img:string,name:string,price:string}) => {
// const product = (props:img) => {
    //  console.log(props)
    return (
        <div>

            <div className='mb-5 ml-3'>

                <Image
                    src={`/assets/productsec/${img}.jpg`}
                    alt="img"
                    width={400}
                    height={400}
                    className='w-[300px] h-[350px] object-cover'
                />
                <h2 className='text-lg mt-2  text-center'>{name}

                </h2>
                <p className=' font-extrabold text-center'>{price}</p>
            </div>


        </div>
    )
}

export default product