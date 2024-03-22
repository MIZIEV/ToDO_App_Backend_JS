const { addNewTodo } = require("../controller/todo.controller.js");
const todoRouter = require("express").Router();

todoRouter.post("/:id/todo/add", addNewTodo);

module.exports = todoRouter;