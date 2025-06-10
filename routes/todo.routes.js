const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.get("/all", todoController.getAllTodos);
router.get("/search/:id", todoController.getTodo);
router.post("/add", todoController.createTodo);
router.put("/edit/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);

module.exports = router;
