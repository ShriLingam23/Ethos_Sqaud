const mongoose = require('mongoose')
const schema = mongoose.Schema

var CourseSchema = new schema({
    courseName:{
        type:String,
        required:true
    },
    enrollment:{
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
    }
})

module.exports = mongoose.model('Course',CourseSchema)