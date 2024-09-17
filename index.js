// server.js
const express = require('express');
const todoRoutes = require("./todoRoutes");
const cors = require('cors');
const { connectToMongoDB } = require('./src/config/db.config');

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Enable CORS for development
server.use(cors());

// Use your routes
server.use("/api/todos", todoRoutes.router);

// A simple route for testing
server.get("/", (req, res) => {
    res.send("Welcome to Utility API");
});

// Start the server after all middleware and routes are set up
const PORT = 4100;
server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
    connectToMongoDB();
});
