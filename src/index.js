const express = require("express");
const app = express();
const port = 5000;

const production = [
  {
    id: 1,
    productName: "bach",
    description: "abc",
  },
  {
    id: 2,
    productName: "bach2",
    description: "abc",
  },
];

app.get("/bach", function (req, res) {
  res.json(production); //
});

app.listen(port, () => {
  console.log("listening on port:" + port);
});
