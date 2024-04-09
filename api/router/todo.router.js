const { addNewTodo, getAllTodos, toggleTodoCompletion, deleteTodo } = require("../controller/todo.controller.js");
const todoRouter = require("express").Router();
const todoJsonValidator = require("../util/todoJsonValidator.js");
const { checkToken } = require("../../configuration/jwtValidator.js");

todoRouter.post("/:id/todo/add", checkToken, todoJsonValidator, addNewTodo);
todoRouter.get("/:id/todo/list", checkToken, getAllTodos);
todoRouter.patch("/:id/todo/:todoId", checkToken, toggleTodoCompletion);
todoRouter.delete("/:id/todo/:todoId", checkToken, deleteTodo);

module.exports = todoRouter;