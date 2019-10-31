const express = require("express");
const router = express.Router();
const CourseStudent = require("../models/course_student");

// Add a CourseStudent details using POST method
// http://localhost:4000/api/coursestudent/add & Request Body
router.post("/add", (req, res) => {
  const courseStudent = new CourseStudent(req.body);
  courseStudent
    .save()
    .then(() => {
      res.status(200).send({ message: "Successfully added courseStudent" });

      console.log(req.body.email, req.body.password);
    })
    .catch(err => {
      res.status(400).send({ message: err });
      console.log(err);
    });
});

// Get courseStudent details using GET method
// http://localhost:4000/api/coursestudent/get
router.get("/get", (req, res) => {
  CourseStudent.find()
    .then(course => {
      res
        .status(200)
        .json(course)
        .send({ message: "Successfully retrived", data: course });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Get an courseStudent details using GET method
// http://localhost:4000/api/coursestudent/get/ + id
router.get("/get/:id", (req, res) => {
  CourseStudent.findById(req.params.id)
    .then(course => {
      res
        .status(200)
        .json(course)
        .send({ message: "Successfully retrived", data: course });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Update an courseStudent details using PUT method
// http://localhost:4000/api/coursestudent/update + id
router.put("/update/:id", (req, res) => {
  CourseStudent.updateOne({ _id: req.params.id }, req.body)
    .then(courseStudent =>
      res
        .status(200)
        .send({ message: "Successfully updated", data: courseStudent })
    )
    .catch(err => res.status(400).send({ message: err }));
});

// Delete an coursestudent details using DELETE method
// http://localhost:4000/api/coursestudent/delete + id
router.delete("/delete/:id", (req, res) => {
  CourseStudent.deleteOne({ id: req.params.regId })
    .then(courseStudent => {
      res
        .status(200)
        .send({ message: "Successfully deleted", data: courseStudent });
    })
    .catch(err => res.status(400).send({ message: err }));
});

module.exports = router;
