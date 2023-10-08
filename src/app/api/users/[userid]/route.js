import { NextResponse } from "next/server";
import { user } from "../../../../utils/db";

export async function GET(request, content) {
  const { userid } = content.params;
  const data = user;
  const findUser = data.find(user=>user.id==userid)
  if(!findUser) return NextResponse.json({
    message:'user not found with this id!',
  })
  return NextResponse.json({
    message: "single user data found!",
    status: 200,
    data:findUser,
  });
}


export async function PUT(request,content) {
    const { userid } = content.params;
    const payload = await request.json()
    console.log(payload)
    payload.id = userid
    if(!payload.id || !payload.name || !payload.email || !payload.password ){
        return NextResponse.json({
            message:'request data is not valid!',
            success:false
        },{status:400})
    }
    return NextResponse.json({
      message: "user updated successfully!",
      status: 200,
      success:true,
      data:payload
    },{status:201});
  }
  

  export function DELETE (params,content){
    console.log(content)
    const {userid} = content.params
    const findUser = user.find(item=>item.id==userid)
    if(!findUser) return NextResponse.json({message:'this user does not exist, please try with valid user id',success:false,status:404},{status:400}) 
return NextResponse.json({
      message:'user deleted successfully',
      success:true,
      status:200
    },{status:200})

  }