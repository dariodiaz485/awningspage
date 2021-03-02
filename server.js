const express = require("express");
const SMTPPool = require("nodemailer/lib/smtp-pool");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello!!");
});

SMTPPool.listenerCount(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
