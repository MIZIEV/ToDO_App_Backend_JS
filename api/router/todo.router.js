const { addNewTodo, getAllTodos, deleteTodo } = require("../controller/todo.controller.js");
const todoRouter = require("express").Router();

todoRouter.post("/:id/todo/add", addNewTodo);
todoRouter.get("/:id/todo/list", getAllTodos);
todoRouter.delete("/:id/todo/:todoId", deleteTodo);

module.exports = todoRouter;