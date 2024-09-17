// server.js
import express, { json } from "express";
import cors from "cors";
import { connectToMongoDB } from "./src/config/db.config.js";
import todoRouter from "./src/features/todo/todo.routes.js";
import notesRouter from "./src/features/notes/notes.routes.js";

const server = express();

// Middleware to parse JSON bodies
server.use(json());

// Enable CORS for development
server.use(cors());

// Use your routes
server.use("/api/todos", todoRouter);
server.use("/api/notes", notesRouter);

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
