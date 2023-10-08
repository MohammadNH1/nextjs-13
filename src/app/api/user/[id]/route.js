import { NextResponse } from "next/server";
export async function GET(request,content){
    console.log(content)
    const {id} = content.params
    return NextResponse.json({
        message:'Hello from dynamic route',
        userId:id
    })
}

export async function POST (request,content){
    const paylaod = await request.json()
    const {id} = content.params
    return NextResponse.json({
        method:POST,
        message:'Hello from dynamic route',
        data:{
            post:{...paylaod,userId:id}
        }
    })
}

export async function PUT (request,content){
    const paylaod = await request.json()
    const {id} = content.params
    return NextResponse.json({
        message:'user data updated successfully!',
        userId:id,
        updatedData:{...paylaod}
    })
}


export async function DELETE (request,content){
    const {id} = content.params
    return NextResponse.json({
        message:'user data deleted successfully!',
        userId:id,
    })
}