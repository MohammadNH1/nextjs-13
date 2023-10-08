import Link from "next/link";
import { NextResponse } from "next/server";
import DeleteButton from "../components/DeleteButton";






const getProduct =async()=>{
    const response = await fetch('httP://localhost:3000/api/products',{cache:"no-cache"})
    const data = await response.json()
    return data
}

import React from 'react'

const page =async() => {
    const {data}= await getProduct()
  return (
    <div>
        <h4>product list</h4>
      {data&&data.map(item=><div key={item._id}>
        <span style={{marginRight:'10px'}}>name: {item.name}</span>
        <span style={{marginRight:'10px'}}> price: {item.price}</span>
        <span style={{marginRight:'10px'}}> category: {item.category}</span>
        <span style={{marginRight:'10px'}}>company: {item.company}</span>
        <span style={{marginRight:'10px'}}>color: {item.color}</span>
        <span style={{marginRight:'10px'}}><Link href={`/products/${item._id}`}>Update</Link></span>
        <DeleteButton productid={item._id}/>
      </div>)}
    </div>
  )
}

export default page
