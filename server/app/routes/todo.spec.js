const request = require("supertest");
const express = require("express");
const router = require("../routes/todos.js");
const TodoModel = require("../models/todo.js");

jest.mock("../models/todo");

const app = express();
app.use(express.json());
app.use(router);

describe("Todo Routes", () => {
  it("should fetch all todos", async () => {
    TodoModel.find.mockResolvedValue([
      { _id: "1", name: "Test Todo", description: "Test Description" },
    ]);

    const res = await request(app).get("/api/todos");

    expect(res.statusCode).toEqual(200);
  });

  it("should create a new todo", async () => {
    const todoData = {
      name: "New Todo",
      description: "New Description",
    };

    TodoModel.create.mockResolvedValue({
      _id: "2",
      name: "New Todo",
      description: "New Description",
    });

    const res = await request(app).post("/api/todos").send(todoData);

    expect(res.statusCode).toEqual(201);
  });

  it("should update an existing todo", async () => {
    const todoId = "1";
    const updatedTodoData = {
      name: "Updated Todo",
      description: "Updated Description",
    };

    const updatedTodo = {
      _id: todoId,
      name: updatedTodoData.name,
      description: updatedTodoData.description,
      closedAt: updatedTodoData.completed ? new Date() : null,
    };

    TodoModel.findOneAndUpdate.mockResolvedValue(updatedTodo);

    const res = await request(app)
      .patch(`/api/todos/${todoId}`)
      .send(updatedTodoData);

    expect(res.statusCode).toEqual(200);
  });

  it("should update a non-existing todo", async () => {
    const todoId = "3";
    const updatedTodoData = {
      name: "Updated Todo",
      description: "Updated Description",
    };

    TodoModel.findOneAndUpdate.mockResolvedValue(null);

    const res = await request(app)
      .patch(`/api/todos/${todoId}`)
      .send(updatedTodoData);

    expect(res.statusCode).toEqual(404);
  });

  it("should create a new todo", async () => {
    const todoData = {
      name: "New Todo",
      description: "New Description",
    };

    const res = await request(app).post("/api/todos").send(todoData);

    expect(res.statusCode).toEqual(201);
  });

  it("should delete an existing todo", async () => {
    const todoId = "1";
    const deletedTodoData = {
      name: "Deleted Todo",
      description: "Deleted Description",
    };

    const deletedTodo = {
      _id: todoId,
      name: deletedTodoData.name,
      description: deletedTodoData.description,
    };

    TodoModel.findOneAndDelete.mockResolvedValue(deletedTodo);

    const res = await request(app).delete(`/api/todos/${todoId}`);

    expect(res.statusCode).toEqual(202);
  });

  it("should delete a non-existing todo", async () => {
    const todoId = "5";

    TodoModel.findOneAndDelete.mockResolvedValue(null);

    const res = await request(app).delete(`/api/todos/${todoId}`);

    expect(res.statusCode).toEqual(404);
  });
});
