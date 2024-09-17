import mongoose from "mongoose";
import { notesSchema } from "./notes.model.js";

const notesModel = mongoose.model("notes", notesSchema);

export default class NotesRepository {

  async getNotes() {
    try {
      const notes = await notesModel.find();
      console.log(notes);
      return notes;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async addNotes(todo) {
    try {
      const newNote = new notesModel(todo);
      await newNote.save();
      return newNote;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async deleteNotes(id) {
    try {
      const isdeleted = await notesModel.findByIdAndDelete(id);
      return isdeleted;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
