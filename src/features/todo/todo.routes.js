import TodoController from "./todo.controller.js";

import express from "express";

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter.get("/", (req, res, next) => {
  todoController.getTodos(req, res, next);
});

todoRouter.post("/todo", (req, res, next) => {
  todoController.addTodo(req, res, next);
});

todoRouter.delete("/todo/:id", (req, res, next) => {
  todoController.deleteTodo(req, res, next);
});

export default todoRouter;
