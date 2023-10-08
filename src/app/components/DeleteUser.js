'use client'
import React from 'react'

const DeleteUser = ({userid}) => {
   const handleDelete = async()=>{
    const response = await fetch(`http://localhost:3000/api/users/${userid}`,{
        method:"DELETE"
    })
    const data = await response.json()
    console.log(data)
    if(data.success) alert('user deleted successfully!')
   }
  return (
   
        <button onClick={handleDelete}>Delete</button>
      
    
  )
}

export default DeleteUser
