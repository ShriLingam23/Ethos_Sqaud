const express = require("express");
const router = express.Router();
const Question = require("../models/question");
const Unit = require("../models/unit");

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

//Custom method for Adding new Unit along with the Question and options
router.post("/custom/uq/add", (req, res) => {

  console.log(req.body)

  const title = req.body.title;
  const content= req.body.content;
  const courses= req.body.courses;
  const question= req.body.question;
  const option1= req.body.option1;
  const correct1= req.body.correct1;
  const option2= req.body.option2;
  const correct2= req.body.correct2;
  const option3= req.body.option3;
  const correct3= req.body.correct3;
  const option4= req.body.option4;
  const correct4= req.body.correct4;

  const unit = new Unit();
  unit.title = title;
  unit.content = content;
  unit.courses = courses;

  //Saving unit
  unit.save().then(
    ()=>{

      //Saving Question
      const questionObj = new Question();
      questionObj.question=question;
      questionObj.options=[
        {
          id: 1,
          text: option1,
          answer: correct1
        },
        {
          id: 2,
          text: option2,
          answer: correct2
        },
        {
          id: 3,
          text: option3,
          answer: correct3
        },
        {
          id: 4,
          text: option4,
          answer: correct4
        }
      ]

      questionObj.save().then(
        ()=>{
          res.status(200).send({ message: "Successfully added Question" });
        }
      )
      .catch(err =>{
        res.status(400).send({ message: err });
        console.log(err);
      });
      
      res.status(200).send({ message: "Successfully added Unit" });
    }
  )
  .catch(err =>{
    res.status(400).send({ message: err });
    console.log(err);
  });

  

  // const question = new Question(req.body);
  // question
  //   .save()
  //   .then(() => {
  //     res.status(200).send({ message: "Successfully added Question" });

  //     console.log(req.body.options, req.body.question);
  //   })
  //   .catch(err => {
  //     res.status(400).send({ message: err });
  //     console.log(err);
  //   });
});

module.exports = router;
