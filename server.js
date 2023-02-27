// import dataSet from "./dataSet.js";
const dataSet = require("./dataset")
const express = require("express");

const app = express();
const port = 3001;

app.use(express.json());

app.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = dataSet.filter((data) => data.id === id);
  const result = data.map((obj) => obj.data);
  res.send(result[0]);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
