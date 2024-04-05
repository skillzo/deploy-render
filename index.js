const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use("/", (req, res) => {
  res.send("deploy node app process ");
});

app.listen(port, () => {
  console.log(`app runnimg on port ${port}`);
});
