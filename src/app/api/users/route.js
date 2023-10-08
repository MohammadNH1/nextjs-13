import { NextResponse } from "next/server";
import {user} from '../../../utils/db'
import bcrypt from 'bcryptjs'
export async function GET(){
    const data = user
    return NextResponse.json({
        message:'user data',
        status:200,
        data
    })
}

export async function POST(request){
    const payload = await request.json()
    var id = "id" + Math.random().toString(16).slice(2)
    if(payload) {
        payload.id = id
    }

    if(!payload.name || !payload.email || !payload.password){
        return NextResponse.json({
            message:'required field missing!'
        },{status:400})
    }
    const hashedPassword = await bcrypt.hash(payload.password,10)
    return NextResponse.json({
        message:'user created successfully',
        data:{...payload,password:hashedPassword}
    })

}