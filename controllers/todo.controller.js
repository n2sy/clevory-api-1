const todoList = require("../models/todo.model");

exports.getAllTodos = (req, res) => {
  res.json({
    message: "List de Todos Récupérés",
    listeTodos: todoList,
  });
};
exports.getTodo = (req, res) => {};
exports.updateTodo = (req, res) => {};
exports.createTodo = (req, res) => {};
exports.deleteTodo = (req, res) => {};
