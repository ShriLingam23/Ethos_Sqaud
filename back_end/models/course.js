const mongoose = require('mongoose')
const schema = mongoose.Schema

var CourseSchema = new schema({
    name:{
        type:String,
        required:true
    },
    enrollement_key:{
        type:String,
        required:true
    },
    credit:{
        type:Number,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    units:[{
        type:schema.Types.ObjectId,
        ref:'unit'
    }]
})

module.exports = mongoose.model('Course',CourseSchema)