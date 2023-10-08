import React from 'react'
const  getsingleUser = async(userid)=>{
    const response = await fetch(`http://localhost:3000/api/users/${userid}`)
    const data = await response.json()
    return data
}
const page = async({params}) => {
    const {userid} = params
    const data = await getsingleUser(userid)
    const {name,email} = data?.data
  return (
    <div>
      <h4>Single user page</h4>
      <span>name: {name}</span> <br/>
      <span>email: {email}</span>

    </div>
  )
}

export default page
