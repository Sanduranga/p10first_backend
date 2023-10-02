const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/firstapi", (request, response) => {
  response.json({
    name: "sanduranga",
    age: 26,
    gender: "male",
    subjects: [
      { subject1: "maths", marks1: 68 },
      { subject2: "chemistry", marks2: 80 },
      { subject3: "physics", marks3: 90 },
    ],
  });
});

app.post("/firstapi", async (request, response) => {
  try {
    if (!request.body.name || !request.body.age || !request.body.gender) {
      console.log("aaaa");
      response.send("err");
    } else {
      console.log("ssss");
      const newStudent = {
        name: request.body.name,
        age: request.body.age,
        gender: request.body.gender,
        subject1: request.body.subject1,
        marks1: request.body.marks1,
        subject2: request.body.subject2,
        marks2: request.body.marks2,
        subject3: request.body.subject3,
        marks3: request.body.marks3,
      };
      return response.json(newStudent);
    }
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

app.listen(5555, () => {
  console.log("server started on localhost:5555");
});
