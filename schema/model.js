const mongoose = require('mongoose');

let schema = mongoose.Schema

let tududata = new schema({
    email:String,
    task:String
})

let tuduschema = mongoose.model('todo',tududata)

let signdata = new schema({
    email:String,
    todo:String,
    password:String
})

let signdatas = mongoose.model('signs',signdata)

module.exports ={signdatas,tuduschema} 