import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeroSec } from '@/useable/HeroSec'
import { Productsec } from '@/useable/Productsec'
import Promotions from "../useable/Promotions"
import SecondL from '@/useable/secondL'
import { Foot } from '@/useable/Foot'
import Email from '@/useable/Email'

export default function Home() {
  return (
  <div>
       
         <HeroSec/>
         <Promotions/>
         <Productsec/>
         <SecondL/>
         <Email/>
      

     
  </div>
  )
}
