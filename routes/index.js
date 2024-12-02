import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

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
router.get("/", (req, res) => {
    res.render("register");
  });


// Dynamic file rendering route
router.get("/:file", (req, res) => {
  const filePath = path.join(__dirname, req.params.file);
  res.render(filePath); // Assumes a view exists with the requested file name
});

export default router;
