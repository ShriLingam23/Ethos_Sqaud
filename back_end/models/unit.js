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
        type:Schema.Types.ObjectId,
        ref:'Course'
    }
})

module.exports = mongoose.model('Unit',UnitSchema)