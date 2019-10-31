const mongoose = require('mongoose')
const schema = mongoose.Schema

var UnitSchema = new schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    courses:{
        type:schema.Types.ObjectId,
        ref:'Course'
    },
    question:[{
        type:schema.Types.ObjectId,
        ref:'question'
    }]
})

module.exports = mongoose.model('Unit',UnitSchema)