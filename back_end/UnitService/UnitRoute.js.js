const express = require("express");
const router = express.Router();
const Unit = require("../models/unit");
const axios = require("axios");
const PORT = process.env.PORT;

// Add a Unit details using POST method
// http://localhost:4000/api/unit/add & Request Body
router.post("/add", (req, res) => {
  const unit = new Unit(req.body);
  unit
    .save()
    .then(() => {
      res.status(200).send({ message: "Successfully added Unit" });
      console.log(req.body.title, req.body.content);
    })
    .catch(err => {
      res.status(400).send({ message: err });
      console.log(err);
    });
});

// Add a Unit details and edit course schema by adding unit object_id into unit array using POST method
// http://localhost:4000/api/unit/add & Request Body
// router.post("/add/:course_id", (req, res) => {
//   const courseData;
//   const unit = new Unit(req.body);
//   unit
//     .save()
//     .then(() => {
//       res.status(200).send({ message: "Successfully added Unit" });
        
//         try {
//           const id = req.params.course_id;
//           axios.get('localhost:'+ PORT +'/api/course/get/'+ id)
//           .then((course) => {
//             courseData = course;
//           })
//           .catch(err => res.status(400).send({ message: err }))

//           var json = JSON.parse(data);
//         } catch (error) {
//           console.error(error)
//         }
      

//       console.log(req.body.title, req.body.content);
//     })
//     .catch(err => {
//       res.status(400).send({ message: err });
//       console.log(err);
//     });
// });

// Get Unit details using GET method
// http://localhost:4000/api/unit/get
router.get("/get", (req, res) => {
  Unit.find()
    .then(unit => {
      res
        .status(200)
        .json(unit)
        .send({ message: "Successfully retrived", data: unit });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Get an unit details using GET method
// http://localhost:4000/api/unit/get/ + id
router.get("/get/:id", (req, res) => {
  Unit.findById(req.params.id)
    .then(unit => {
      res
        .status(200)
        .json(unit)
        .send({ message: "Successfully retrived", data: unit });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Update an unit details using PUT method
// http://localhost:4000/api/unit/update + id
router.put("/update/:id", (req, res) => {
  Unit.updateOne({ _id: req.params.id }, req.body)
    .then(unit =>
      res.status(200).send({ message: "Successfully updated", data: unit })
    )
    .catch(err => res.status(400).send({ message: err }));
});

// Delete an unit details using DELETE method
// http://localhost:4000/api/unit/delete + id
router.delete("/delete/:id", (req, res) => {
  Unit.deleteOne({ id: req.params.regId })
    .then(unit => {
      res.status(200).send({ message: "Successfully deleted", data: unit });
    })
    .catch(err => res.status(400).send({ message: err }));
});

module.exports = router;
