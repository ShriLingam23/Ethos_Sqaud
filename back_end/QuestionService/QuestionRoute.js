const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// Add a Question details using POST method
// http://localhost:4000/api/question/add & Request Body
router.post("/add", (req, res) => {
  const question = new Question(req.body);
  question
    .save()
    .then(() => {
      res.status(200).send({ message: "Successfully added Question" });

      console.log(req.body.options, req.body.question);
    })
    .catch(err => {
      res.status(400).send({ message: err });
      console.log(err);
    });
});

// Get Question details using GET method
// http://localhost:4000/api/question/get
router.get("/get", (req, res) => {
  Question.find()
    .then(question => {
      res
        .status(200)
        .json(question)
        .send({ message: "Successfully retrived", data: question });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Get an question details using GET method
// http://localhost:4000/api/question/get/ + id
router.get("/get/:id", (req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      res
        .status(200)
        .json(question)
        .send({ message: "Successfully retrived", data: question });
    })
    .catch(err => res.status(400).send({ message: "error" }));
});

// Update an question details using PUT method
// http://localhost:4000/api/question/update + id
router.put("/update/:id", (req, res) => {
  Question.updateOne({ _id: req.params.id }, req.body)
    .then(question =>
      res.status(200).send({ message: "Successfully updated", data: question })
    )
    .catch(err => res.status(400).send({ message: err }));
});

// Delete an question details using DELETE method
// http://localhost:4000/api/question/delete + id
router.delete("/delete/:id", (req, res) => {
  Question.deleteOne({ id: req.params.regId })
    .then(question => {
      res.status(200).send({ message: "Successfully deleted", data: question });
    })
    .catch(err => res.status(400).send({ message: err }));
});

module.exports = router;
