import React from 'react'
import UpdateProduct from '@/app/components/UpdateProduct'
const getProduct = async(productid)=>{
  const response = await fetch(`http://localhost:3000/api/products/${productid}`,{cache:'no-store'})
  const data = await response.json()
  return data 

}
const page = async({params}) => {
    const {productid} = params
    const {data} = await getProduct(productid)
   
  return (
    <div>
        <h4>Hello this is a update product page</h4>
        <UpdateProduct product={data}/>
      
    </div>
  )
}

export default page
