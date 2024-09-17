import mongoose from "mongoose";
import { getDB } from "../../config/db.config.js";
import { todoSchema } from "./todo.model.js";

const todoModel = mongoose.model("todo", todoSchema);

export default class TodoRepository {

  async getTodos() {
    try {
      const todos = await todoModel.find();
      console.log(todos);
      return todos;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  async addTodo(todo) {
    try {
      const newtodo = new todoModel(todo);
      await newtodo.save();
      return newtodo;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async deleteTodo(id) {
    try {
      const isdeleted = await todoModel.findByIdAndDelete(id);
      return isdeleted;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
