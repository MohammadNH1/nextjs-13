'use client'
const page = ({params}) => {
    console.log(params)
  return (
    <div>
        <h4>Hello this is a lecture page</h4>
        <span>{params.lecture[0]}</span> <br/>
        <span>{params.lecture[1]}</span>
      
    </div>
  )
}

export default page
