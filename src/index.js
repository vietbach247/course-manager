const express = require("express");
const dbConnection = require("./config/database");
const router = require("./router");
const app = express();
const port = 5000;

// db connect
dbConnection();

// config router
app.use("/api", router);

app.listen(port, () => {
  console.log("listening on port:" + port);
});
