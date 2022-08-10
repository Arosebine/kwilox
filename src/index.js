const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoDb = require("./database/dbase");
const logger = require("morgan");
const app = express();
const Userouter = require("./routes/drink.router");

mongoDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4500;

app.use("/admin/drink", Userouter);
app.get("/", (req, res) => {
  res.render("index to Home page");
});


app.get("*", (req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(process.env.NODE_ENV);
});
