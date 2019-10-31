const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Add a user details using POST method
// http://localhost:4000/api/user/add & Request Body
router.post('/add', (req,res) => {
    const user = new User(req.body);
    user.save()
        .then(() => {
            res.status(200).send({"message":"Successfully added User"});
            console.log(req.body.email, req.body.password)
        })
        .catch((err) => {res.status(400).send({"message":err})
    console.log(err)})
});

// Get user details using GET method
// http://localhost:4000/api/user/get
router.get('/get', (req,res) => {
    User.find()
        .then((user) => {
            if(!user.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(user).send({"message":"Successfully retrived","data":user});
            }
        })
});

// Get an user details using GET method
// http://localhost:4000/api/user/get/ + id
router.get('/get/:id', (req,res) => {
    User.findById(req.params.id)
        .then((user) => {
            if(user.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(user).send({"message":"Successfully retrived","data":user});
            }
    })
});

// Update an user details using PUT method
// http://localhost:4000/api/user/update + id
router.put('/update/:id', (req,res) => {
    User.updateOne({'_id':req.params.id},req.body)
        .then((user) => res.status(200).send({"message":"Successfully updated","data":user}))
        .catch((err) => res.status(400).send({"message":err}))
});


// Delete an user details using DELETE method
// http://localhost:4000/api/yser/delete + id
router.delete('/delete/:id', (req,res) => {
    User.deleteOne({'id':req.params.regId})
        .then((user) => {
            
            res.status(200).send({"message":"Successfully deleted","data":user});
        })
        .catch((err) => res.status(400).send({"message":err}))
})

module.exports = router;