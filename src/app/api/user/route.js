import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
export async function GET (){
 return NextResponse.json({name:'Rahim',email:'rahim@gmail.com',password:'123456'})
}

export async function POST (request){
    const payload = await request.json()
    console.log(payload)
    if(payload){
        payload.id=new Date()
    }
const {name,email,password} = payload
const hashedPassword = await bcrypt.hash(password,10)
console.log(hashedPassword)
    return NextResponse.json({
        message:'user create successfully!',
        data:{
            ...payload,
            password:hashedPassword
        }
    })
}