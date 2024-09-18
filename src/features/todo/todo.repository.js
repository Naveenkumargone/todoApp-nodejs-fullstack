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
      const createdtodo = await newtodo.save();
      console.log(createdtodo);
      return createdtodo;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async updateTodo(id) {
    try {
      const todo = await todoModel.findById(id);
      console.log(todo)
      if (!todo) {
        return {
          success: false,
          message: "todo not found",
        };
      } else {
        todo.completed = !todo.completed;
        await todo.save();
        return {
          success: true,
          message: "todo updated successfully",
          data: todo
        };
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async deleteTodo(id) {
    try {
      const isdeleted = await todoModel.findByIdAndDelete(id);
      if (isdeleted) {
        return {
          success: true,
          message: "todo deleted successfully",
        };
      } else {
        return {
          success: false,
          message: "something went wrong",
        };
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
