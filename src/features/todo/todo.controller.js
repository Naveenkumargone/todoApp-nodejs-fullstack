import TodoRepository from "./todo.repository.js";

export default class TodoController {
  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async getTodos(req, res, next) {
    try {
      const result = await this.todoRepository.getTodos();
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      return res.status(200).send("Something went wrong");
    }
  }

  async addTodo(req, res, next) {
    try {
      const { text, completed, date = new Date() } = req.body;
      const newTodo = { text, completed, date };

      const todo = await this.todoRepository.addTodo(newTodo);
      res.status(201).send(todo);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async updateTodo(req, res, next) {
    try {
      const id  = req.params.id;
      const result = await this.todoRepository.updateTodo(id);
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async deleteTodo(req, res, next) {
    try {
      const id = req.params.id;
      const isdeleted = await this.todoRepository.deleteTodo(id);
      if (!isdeleted) {
        return res.status(404).send("todo is not found");
      } else {
        return res.status(200).send(isdeleted);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

// const todos = [
//     {
//         "text": "Go to Gym at 9", "completed": false
//     },
//     {
//         "text": "Go to Office at 10", "completed": false
//     },
//     {
//         "text": "Meeting at 11", "completed": false
//     }
// ]

// module.exports.get = (req, res) => {
//     return res.end(JSON.stringify(todos));
// }
