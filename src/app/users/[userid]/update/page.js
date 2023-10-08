
import from from 'react'
import '../../../style.css'
import UpdateUser from '../../../components/UpdateUser'
const getUserData = async(id)=>{
    const resposne = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await resposne.json()
    return data
}
const page = async({params}) => {
     const {userid} = params
    const data = await getUserData(userid)
    console.log(data)

    
   
  return (
    <div>
      <h4>Update user details</h4>
      <UpdateUser user={data?.data}/>
    </div>
  )
}

export default page
