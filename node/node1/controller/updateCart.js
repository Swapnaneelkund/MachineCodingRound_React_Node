import model from "../model/userModel.js";
async function updateCart(req,res){
   const {roll}=req.body
    await model.findOneAndUpdate({roll:roll},{
        $inc:{cart:+1}
    },{
        new:true
    })
    return res.status(204).send()
}
async function updateEmail(req,res){
    const {roll,email}=req.body
    await model.findOneAndUpdate({roll:roll},{
        $set:{email:email}
    })
    return res.status(204).send()
}
async function updateEmail(req,res){    //for and property
    const {roll,email,name}=req.body
    await model.findOneAndUpdate({roll:roll,name:namd},{
        $set:{email:email}
    })
    return res.status(204).send()
}
async function updateEmail(req,res){
    const {roll,email,name}=req.body
    await model.findOneAndUpdate({$or:[
        {name:name},
        {email:email}
    ]},{
        $set:{email:email}
    })
    return res.status(204).send()
}

model.aggregate([
{
    $match:{
        roll:112
    }
}
])

model.aggregate([
    {
        $group:{
            _id:null,
            totaluser:{
                $sum:1
            }
        }
    }
])
model.aggregate([
    {
        $group:{
            _id:"$roll",
            count:{$sum:1}
        }
    }
])
model.aggregate([
    {
        $sort:{
            roll:1
        }
    }
])
model.findOneAndUpdate({name:"swapnaneel"},[{
    $set:{
        email:{
            $toLower:"$email"
        }
    }
}])

