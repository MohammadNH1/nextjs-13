'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const DeleteButton = ({productid}) => {
    const router = useRouter();
    const handleDelete = async()=>{
        const response = await fetch(`http://localhost:3000/api/products/${productid}`,{
            method:"delete"
        })
        const data = await response.json()
        if(data.success){
            alert('product deleted successfully!')
            router.push('/products')
        }

    }
  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default DeleteButton
