const { addNewTodo, getAllTodos } = require("../controller/todo.controller.js");
const todoRouter = require("express").Router();

todoRouter.post("/:id/todo/add", addNewTodo);
todoRouter.get("/:id/todo/list", getAllTodos);

module.exports = todoRouter;