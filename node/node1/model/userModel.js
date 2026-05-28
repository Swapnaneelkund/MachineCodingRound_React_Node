import mongoose from "mongoose"
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:Number,
    roll:Number,
    Address:Object,
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    cart:Number
})
const model=mongoose.model("user",schema);
export default model;