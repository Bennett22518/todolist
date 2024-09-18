const {signdatas,tuduschema} = require("../schema/model");


exports.postdatas = async (req,res,next)=>{
    try {
        let task =req.body
        let datas = new tuduschema({task:task.task,email:task.email})
        let ress = await datas.save()
        res.send({name:ress,message:'success',statuscode:200})
    } catch (error) {
        next(error)
    }
}


exports.getdatass = async (req ,res,next)=>{
    try {
        let email = req.params.email
        let getda = await tuduschema.find({email})
        res.send({names:getda,statuscode:200}).status(200)
    } catch (error) {
        res.send(error)
        res.send({message:'database - internal server error'}).status(500)
    }
}

