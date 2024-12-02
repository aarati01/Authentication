import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createUser } from "../controller/userController.js";

const router = express.Router();

// This lines to specify where are the models

const user = import("./models/user");
const product = import("./models/product");
// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Root route
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/secret", (req, res) => {
  res.render("secret");
});

// Register user
router.post("/register", createUser);

export default router;
