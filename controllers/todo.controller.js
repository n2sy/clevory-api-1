const todoList = require("../models/todo.model");

exports.getAllTodos = (req, res) => {
  res.json({
    message: "List de Todos Récupérés",
    listeTodos: todoList,
  });
};
exports.getTodo = (req, res) => {
  let selectedTodo = todoList.todoList.find(
    (element) => element.id == req.params.id
  );
  if (!selectedTodo)
    res.status(404).json({ message: "Aucun Todo n'existe avec cet id" });
  res.status(202).json({ message: "Todo Trouvé", todo: selectedTodo });
};
exports.updateTodo = (req, res) => {};
exports.createTodo = (req, res) => {};
exports.deleteTodo = (req, res) => {};
