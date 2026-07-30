const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Coffee Shop Backend Server is Running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// Server Port
const PORT = 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});