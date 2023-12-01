const { Router } = require("express");
const TodoModel = require("../models/todo");
const router = Router();

/**
 * Az osszes todo lekerdezese
 *
 */
router.get("/api/todos", async (req, res) => {
  const todos = await TodoModel.find({});

  return res.status(200).json({
    data: todos,
    success: true,
    status: 200,
    error: null,
  });
});

/**
 * Todo lekerdezese id alapjan
 */
router.get("/api/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const todos = await TodoModel.find({ _id: todoId });

  return res.status(200).json({
    data: todos,
    success: true,
    status: 200,
    error: null,
  });
});

/**
 * Todo letrehozasa
 */
router.post("/api/todos", async (req, res) => {
  const { name, description } = req.body;

  const todo = new TodoModel({
    name,
    description,
    createdAt: new Date(),
    closedAt: null,
  });

  const savedTodo = await todo.save();

  return res.status(200).json({
    data: savedTodo,
    success: true,
    status: 200,
    error: null,
  });
});

/**
 * Todo modositasa
 */
router.patch("/api/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const { name, description, completed } = req.body;

  const todo = await TodoModel.updateOne(
    { _id: todoId },
    { name, description, closedAt: completed ? new Date() : null }
  );

  return res.status(200).json({
    data: todo,
    success: true,
    status: 200,
    error: null,
  });
});

/**
 * Todo torlese
 */
router.delete("/api/todos/:todoId", async (req, res) => {
  const { todoId } = req.params;
  const todo = await TodoModel.deleteOne({ _id: todoId });

  res.status(202).json({
    data: todo,
    success: true,
    status: 200,
    error: null,
  });
});

module.exports = router;
