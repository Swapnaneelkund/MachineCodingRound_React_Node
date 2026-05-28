import mongoose from "mongoose"
import model from "./model.js";
const seed=async ()=>{
   try {
      await mongoose.connect("mongodb://ok123:ok123@ac-mhfbmsf-shard-00-00.vgib8wb.mongodb.net:27017,ac-mhfbmsf-shard-00-01.vgib8wb.mongodb.net:27017,ac-mhfbmsf-shard-00-02.vgib8wb.mongodb.net:27017/fakestore?ssl=true&replicaSet=atlas-fod2sk-shard-0&authSource=admin&appName=Cluster0");
      let result=await fetch("https://fakestoreapi.com/products")
      result=await result.json();
      await model.deleteMany({});
      await model.insertMany(result.map(ele=>{
        return {
           Items:ele
        }
      }))
      console.log("done");
      process.exit(0);
   } catch (error) {
    console.log(error);
    process.exit(1);
   }
}
seed();