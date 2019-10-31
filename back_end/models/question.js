const mongoose = require('mongoose')
const schema = mongoose.Schema

var QuestionSchema = new schema({
    course:{
        type:schema.Types.ObjectId,
        ref:'Course'
    },
    unit:{
        type:schema.Types.ObjectId,
        ref:'Unit'
    },
    question:{
        type:String,
        required:true
    },
    // options:[{
    //     type:String,
    //     required:true
    // }]

    options: [
        {
            id: Number,
            text: String,
            answer: Boolean
        }
    ]
})

module.exports = mongoose.model('Question',QuestionSchema)