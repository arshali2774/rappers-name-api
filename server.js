const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21savage": {
    age: 29,
    birthname: "local",
    birthlocation: "London,UK",
  },
  "chance the rapper": {
    age: 29,
    birthname: "chance",
    birthlocation: "Chicago,Illinois",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const queryParam = req.params.rapperName.toLowerCase();
  //   res.json(rappers);
  if (rappers[queryParam]) {
    res.json(rappers[queryParam]);
  } else {
    res.json("error");
  }
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
