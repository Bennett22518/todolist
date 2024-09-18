let express = require('express')
const app = express()
const mongoose = require('mongoose')
const { postdatas, getdatass } = require('./contorls/controls')
const axios = require('axios')
const cors = require('cors')
const{ tuduschema, signdatas} = require('./schema/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRETKEY = "keykey"

let port = 3100

app.use(express.json())
app.set('view engine','js')
app.use(cors())

const mongoconnect = async ()=>{
    try {
       await mongoose.connect('mongodb+srv://pennettsuresh:devanankurichian@cluster0.off3qbx.mongodb.net/',{
            useNewUrlParser:true,
        })
        console.log('mongodb successful connected');
    } catch (error) {
        console.log(error);
    }
}
mongoconnect()


let middilware = (req,res,next)=>{
    try {
        if(req.headers.authorization){

            jwt.verify(authorization.split(' ')[1],SECRETKEY,(error)=>{
                    res.send({message:"unauthorized",status:401})
                    return;
            })
            
        }
        else{
            res.send({message:'unauthorized',statuscode:401})
            return
        }
        next()
    } catch (error) {
        res.send(error)
    }
    
}

let midarr = ['/newd','/posthere','/getdatass','/putdata','/putdata']

app.use(midarr,middilware)

app.post('/posthere',postdatas)

app.get('/getdatass/:email',getdatass)

app.delete('/newd/:id', async(req,res)=>{
    try {
        let id = req.params.id
        let result = await tuduschema.findByIdAndDelete(id)
        res.send({data:result, message:"success"}).status(201)
    } catch (error) {
        next(error)
    }
})

app.post('/signup',async (req,res)=>{
    try{
    let {email,password} = req.body
    let token = jwt.sign({email},SECRETKEY,{expiresIn:86400})
    let salt = bcrypt.genSaltSync(10)
    let response =await bcrypt.hash(password, salt)
    let datas = new signdatas({email:email,password:response})
    let saves = await datas.save()
    res.send({hashed:saves,statuscode:200,tokens:token})
}
catch(error){
    res.send(error)
}})

app.post('/signin',async (req,res)=>{
    try {
        let {email,password} = req.body
        let pas = await signdatas.find({email:email})
        let pwd = bcrypt.compareSync(password,pas[0]?.password)
        let token = jwt.sign({email},SECRETKEY,{expiresIn:86400})
        res.send({data:pwd,message:'success',statuscode:200,tokens:token})
    } catch (error) {
        console.log(err);
    }

})

app.put('/putdata/:id',async(req,res,next)=>{
    try {
        let id = req.params.id
        let body = req.body
        let result = await todo.findByIdAndUpdate(id,{task:body.task},{new:true})
        res.send({data:result, message:"success"}).status(200)
    } catch (error) {
        next(error)
    }
})

app.listen(port,()=>{
    console.log("server is running on port",port);
})

