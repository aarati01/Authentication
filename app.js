import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import path from "path";
import indexRoutes from "./routes/index.js"; // Import routes

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the app
const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/secret", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection status
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB...");
});

// Routes
app.use("/", indexRoutes); // Use imported routes

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
