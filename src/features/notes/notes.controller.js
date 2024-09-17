import NotesRepository from "./notes.repository.js";

export default class NotesController {
  constructor() {
    this.notesRepository = new NotesRepository();
  }

  async getNotes(req, res, next) {
    try {
      const result = await this.notesRepository.getNotes();
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      return res.status(200).send("Something went wrong");
    }
  }

  async addNotes(req, res, next) {
    try {
      const { text, completed, date = new Date() } = req.body;
      const newNote = { text, completed, date };

      await this.notesRepository.addNotes(newNote);
      res.status(201).send(newNote);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async deleteNotes(req, res, next) {
    try {
      const id = req.params.id;
      const isdeleted = await this.notesRepository.deleteNotes(id);
      if (!isdeleted) {
        return res.status(404).send("todo is not found");
      } else {
        return res.status(200).send("todo deleted successfully");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
