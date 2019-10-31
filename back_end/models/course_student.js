const mongoose = require('mongoose')
const schema = mongoose.Schema

var CourseStudentSchema = new schema({
    courses:{
        type:schema.Types.ObjectId,
        ref:'Course'
    },
    students:{
        type:schema.Types.ObjectId,
        ref:'User'
    },
    status:{
        type:Number,
        required:true
    },
    marks:{
        type:String
    }
})

module.exports = mongoose.model('CourseStudent',CourseStudentSchema)