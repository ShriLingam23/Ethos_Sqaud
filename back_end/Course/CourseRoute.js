const express = require('./node_modules/express')
const router = express.Router()
const Course = require('../models/course')

// Add a Course details using POST method
// http://localhost:4000/api/course/add & Request Body
router.post('/add', (req,res) => {
    const course = new Course(req.body);
    course.save()
        .then(() => {
            res.status(200).send({"message":"Successfully added Course"});

            console.log(req.body.email, req.body.password)
        })
        .catch((err) => {res.status(400).send({"message":err})
    console.log(err)})
});

// Get Course details using GET method
// http://localhost:4000/api/course/get
router.get('/get', (req,res) => {
    Course.find()
        .then((course) => {
            if(!course.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(cousre).send({"message":"Successfully retrived","data":course});
            }
        })
});

// Get an course details using GET method
// http://localhost:4000/api/course/get/ + id
router.get('/get/:id', (req,res) => {
    Course.findById(req.params.id)
        .then((course) => {
            if(course.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(course).send({"message":"Successfully retrived","data":course});
            }
    })
});

// Update an course details using PUT method
// http://localhost:4000/api/course/update + id
router.put('/update/:id', (req,res) => {
    Course.updateOne({'_id':req.params.id},req.body)
        .then((course) => res.status(200).send({"message":"Successfully updated","data":course}))
        .catch((err) => res.status(400).send({"message":err}))
});


// Delete an course details using DELETE method
// http://localhost:4000/api/yser/delete + id
router.delete('/delete/:id', (req,res) => {
    Course.deleteOne({'id':req.params.regId})
        .then((course) => {
            
            res.status(200).send({"message":"Successfully deleted","data":course});
        })
        .catch((err) => res.status(400).send({"message":err}))
})

module.exports = router;