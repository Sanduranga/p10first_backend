const express = require("express");
const app = express();

app.get("/firstapi", (request, response) => {
  response.json({ test: ["one", "two", "three"] });
});

app.listen(5555, () => {
  console.log("server started on localhost:5555");
});
