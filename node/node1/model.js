import mongoose from "mongoose"
const schema=mongoose.Schema({
    Items:Object
})
const model=mongoose.model("user",schema);
export default model; 