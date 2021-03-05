const app = require("./js/app");

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static("AWNINGSPAGE"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "icloud",
    auth: {
      user: "dario8876@icloud.come",
      pass: "Diaz8876",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "dario8876@icloud.come",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("succes");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
