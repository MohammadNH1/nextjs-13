import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { products } from "@/utils/model";
export async function PUT(request,content){
    const payload = await request.json()
    const {productid} = content.params
  try {
    mongoose.connect(process.env.databaseConnection).then(()=>{
        console.log('database connected')
    })
    const filter = {_id:productid}
    const data = await products.findOneAndUpdate(filter,payload,{
        returnOriginal: false
      })
    return NextResponse.json({
        message:'data updated successfully',
        data,
        status:200,
        success:true
    },{status:200})
  } catch (error) {
    return NextResponse.json({
        message:error.message,
        success:false,
        status:404
    },{status:404})
    
  }
   

}

export async function GET(request,content){
    const {productid} = content.params
    try {
        mongoose.connect(process.env.databaseConnection).then(()=>{
            console.log('database connected')
        })
        const data = await products.findOne({_id:productid})
        console.log(data)
        return NextResponse.json({
            data,
            status:200,
            success:true
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
            status:404
        },{status:404})
        
    }


}


export async function DELETE (request,content){
    const {productid} = content.params
    
   
    try {
        mongoose.connect(process.env.databaseConnection).then(()=>{
            console.log('database connected')
        })
    
        const filter = {_id:productid}
        const response = await products.deleteOne(filter)
       return NextResponse.json({
        message:'product deleted successfully!',
        success:true,
        status:200
       },{status:200})
       
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false,
            status:400
           },{status:400})
        
    }
}