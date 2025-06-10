const { todoList, todo_schema } = require("../models/todo.model");

exports.getAllTodos = (req, res) => {
  res.json({
    message: "List de Todos Récupérés",
    listeTodos: todoList,
  });
};
exports.getTodo = (req, res) => {
  let selectedTodo = todoList.find((element) => element.id == req.params.id);
  if (!selectedTodo)
    res.status(404).json({ message: "Aucun Todo n'existe avec cet id" });
  res.status(202).json({ message: "Todo Trouvé", todo: selectedTodo });
};
exports.createTodo = (req, res) => {
  let newTodo = req.body;
  let validation_result = todo_schema.validate(req.body);
  console.log(validation_result);
  res.json({ message: validation_result });

  //   newTodo.id = crypto.randomUUID();
  //   todoList.push(newTodo);
  //   res.json({ message: "Todo ajouté avec succès", tab: todoList });
};
exports.updateTodo = (req, res) => {
  let selectedId = req.params.identifiant;
  let i = todoList.findIndex((element) => element.id == selectedId);
  if (i == -1)
    res.status(404).json({ message: "Aucun Todo n'existe avec cet id" });
  else {
    req.body.id = selectedId;
    todoList[i] = req.body;
    res.json({ message: "Todo modifé avec succès", tab: todoList });
  }
};
exports.deleteTodo = (req, res) => {
  let selectedId = req.params.id;
  let i = todoList.findIndex((element) => element.id == selectedId);
  if (i == -1)
    res.status(404).json({ message: "Aucun Todo n'existe avec cet id" });
  else {
    todoList.splice(i, 1);
    res.json({ message: "Todo supprimé avec succès", tab: todoList });
  }
};
exports.filterTodos = (req, res) => {
  let listeQueryParams = req.query;
  let resultat = todoList.filter(
    (element) => element.year >= req.query.y1 && element.year <= req.query.y2
  );
  res.json({ resultat });
};
