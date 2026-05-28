import mongoose from "mongoose";
async function connection(){
    try {
        await mongoose.connect('')
        console.log("connected")
    } catch (error) {
        console.log("error db connection");
        process.exit(1);
    }
}
export default connection;