const express = require("express"); // Import express
const dotenv = require("dotenv"); // Import dotenv
const connectDB = require("./config/db"); // Import connectDB
const authRoutes = require("./routes/authRoutes"); // Import authRoutes

dotenv.config(); // Load env from .env file
connectDB(); // Connect to database

const app = express(); // Create express app
app.use(express.json()); // Middleware to parse JSON

app.use("/api/auth", authRoutes); // Use authRoutes for /api/auth

// Default route
app.get("/", (req, res) => {
  res.send("User Auth System");
});
// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
