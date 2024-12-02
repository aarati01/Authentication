import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import { Session } from "inspector/promises";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

require("./model/user");
mongoose.connect("mongodb://127.0.0.1:27017/secret", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", function () {
  console.log("We are connected..");
});
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, () => {
  console.log("server running on port 3000");
});
