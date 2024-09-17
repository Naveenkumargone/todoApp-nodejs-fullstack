
import express from "express";
import NotesController from "./notes.controller.js";

const notesRouter = express.Router();

const notesController = new NotesController();

notesRouter.get("/", (req, res, next) => {
  notesController.getNotes(req, res, next);
});

notesRouter.post("/note", (req, res, next) => {
  notesController.addNotes(req, res, next);
});

notesRouter.delete("/note/:id", (req, res, next) => {
  notesController.deleteNotes(req, res, next);
});

export default notesRouter;
