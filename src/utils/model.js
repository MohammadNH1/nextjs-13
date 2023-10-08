import mongoose from "mongoose";
const productScehma = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    category:String,
    color:String
})

export const products = mongoose.models.allproducts || mongoose.model('allproducts',productScehma)