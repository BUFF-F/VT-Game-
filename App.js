const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;
app.use(express.static("Public"));
app.use(morgan("tiny"));
app.listen(port, (res, req) => {
  console.log(`listening on port: ${port}`);
});
app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/VT.html"));
});
