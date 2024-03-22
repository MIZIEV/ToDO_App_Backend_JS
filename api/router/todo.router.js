const { addNewTodo, getAllTodos, toggleTodoCompletion, deleteTodo } = require("../controller/todo.controller.js");
const todoRouter = require("express").Router();

todoRouter.post("/:id/todo/add", addNewTodo);
todoRouter.get("/:id/todo/list", getAllTodos);
todoRouter.patch("/:id/todo/:todoId", toggleTodoCompletion);
todoRouter.delete("/:id/todo/:todoId", deleteTodo);

module.exports = todoRouter;