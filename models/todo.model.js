const Joi = require("joi");

var todoList = [
  {
    id: 1,
    title: "project 1",
    year: 2023,
    statut: "in progress",
  },
  {
    id: 2,
    title: "project 2",
    year: 2020,
    statut: "done",
  },
  {
    id: 3,
    title: "project 3",
    year: 2025,
    statut: "todo",
  },
  {
    id: 4,
    title: "project 4",
    year: 2022,
    statut: "todo",
  },
  {
    id: 5,
    title: "project 5",
    year: 2023,
    statut: "todo",
  },
];

var todo_schema = Joi.object({
  title: Joi.string().min(3).required(),
  year: Joi.number().positive().min(2000),
});

module.exports.todoList = todoList;
module.exports.todo_schema = todo_schema;
