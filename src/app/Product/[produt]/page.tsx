"use client"

import React from 'react'
import { ProductData } from '@/data/imageProductdata';

import ProductDetails from '@/app/pcomponets/productDetails';
type productType =
  {
    produt: string;
  }

const Produt = ({ params }: { params: productType }) => {
  let data = ProductData();
  const modifier = params.produt.replace(/-/g, " ");

  // const ProductObj=data.find((ele)=> (ele.name===modifier) ? ele : null);
  const ProductObj = data.find((ele) => (ele.name === modifier)) || { img: "", name: "", price: "", productDetails: "", productCare: [], picks: "" };
  // console.log(ProductObj);
  const { name, price, img, productDetails, productCare, picks }: { img: string, name: string, price: string, productDetails: string, productCare: string[], picks: string } = ProductObj;

  // const {name ,price, img}:{img:(string|undefined),name:string,price:string}=ProductObj;

  // useEffect(()=>{





  // },[])

  ;

  // console.log(modifier);
  // let imgdata:number=0;
  // // = data.forEach((ele, i) => (ele.name === modifier) ? i : null)
  //  for (let i = 0; i < data.length; i++) {
  //     if(data[i].name === modifier)   
  //     {
  //           console.log(data[i].name   ,  i     , modifier)
  //           imgdata = i ;
  //           break;
  //     }   
  //     else{
  //           imgdata=0;
  //  }
  // }
  // for (let i = 0; i < data.length; i++) {
  //   if (imgdata==i) {
  //   }
  // }
  return (
    <div>
      <ProductDetails img={img} name={name} price={price} productDetails={productDetails} productCare={productCare} picks={picks} />
      {/* <Product img={img}  name={name}  price ={price}/>       */}

    </div>
  )
}

export default Produt;