import { Schema } from "mongoose";

export const notesSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  }
});

