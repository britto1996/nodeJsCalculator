import express from "express";
import path from "path";
import bodyParser from "body-parser";

const __dirname = path.resolve();

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/result", (req, res) => {
  const firstNumber = parseInt(req.body.num1);
  const secondNumber = parseInt(req.body.num2);
  const sum = Number(firstNumber + secondNumber);
  const prod = Number(firstNumber * secondNumber);
  const div = Number(firstNumber / secondNumber);
  res.send(`sum of the two numbers is : ${sum}<p>
  product of the two numbers is : ${prod}<p>
  average of the two numbers is:${div}`);
});

//bmi calculation
app.post("/bmi", (req, res) => {
  const weight = parseFloat(req.body.num1);
  const height = parseFloat(req.body.num2);
  const total = weight / Math.pow(height, 2);
  res.send(`bmi sum of your body is ${total}`);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
