import Link from 'next/link'
import React from 'react'
import DeleteUser from '../components/DeleteUser'
const getUser = async()=>{
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    return data
}
const page = async() => {
    const data = await getUser()
  return (
    <div >
        <h4>User list page</h4>
      {
        data.data.map(item=><div key={item.id}>
           <span  style={{marginRight:'20px'}}><Link href={`/users/${item.id}`}>{item.name}</Link></span> 
           <span style={{marginRight:'20px'}}><Link href={`/users/${item.id}/update`} >update</Link></span>
           <span style={{marginRight:'20px'}}><DeleteUser userid={item.id}/></span>
            
            
        </div>)
      }
    </div>
  )
}

export default page
