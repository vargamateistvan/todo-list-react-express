import React, { useState } from "react";
import {
  ContainedListItem,
  TextInput,
  Checkbox,
  Button,
  IconButton,
  TextArea,
} from "@carbon/react";
import { Checkmark, Close, Edit, TrashCan } from "@carbon/icons-react";
import { TodoType } from "../state/types";
import { apiURL } from "./TodoList";

interface TodoListItemProps {
  todo: TodoType;
  refreshList: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, refreshList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [completedTodo, setCompletedTodo] = useState(!!todo.closedAt);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedTodo({ ...editedTodo, name: event.target.value });
  };

  const handleDescriptionInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditedTodo({ ...editedTodo, description: event.target.value });
  };

  const handleClosedCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompletedTodo(event.target.checked);
  };

  const editTodo = async () => {
    const todo = {
      ...editedTodo,
      completed: completedTodo,
    };
    const response = await fetch(`${apiURL}/todos/${editedTodo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const updatedTodo = await response.json();
    console.log(updatedTodo);
    refreshList();
    setIsEditing(false);
  };

  const deleteTodo = async () => {
    const response = await fetch(`${apiURL}/todos/${editedTodo._id}`, {
      method: "DELETE",
    });
    const deletedTodo = await response.json();
    console.log(deletedTodo);
    refreshList();
  };

  return (
    <ContainedListItem>
      {isEditing ? (
        <div>
          <TextInput
            id={`todo-name-${todo._id}`}
            labelText="Name"
            value={editedTodo.name}
            onChange={handleNameInputChange}
          />
          <TextArea
            id={`todo-description-${todo._id}`}
            labelText="Description"
            value={editedTodo.description}
            onChange={handleDescriptionInputChange}
          />
          <Checkbox
            id={`todo-completed-${todo._id}`}
            labelText="Completed"
            checked={completedTodo}
            onChange={handleClosedCheckboxChange}
            disabled={!isEditing}
          />
        </div>
      ) : (
        <div>
          Name: {todo.name} <br />
          Description: {todo.description} <br />
          Completed:{" "}
          {completedTodo ? (
            <Checkmark color="success" />
          ) : (
            <Close color="danger" />
          )}
        </div>
      )}

      {isEditing ? (
        <>
          <Button onClick={editTodo}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <IconButton kind="primary" label="Edit" onClick={handleEdit}>
          <Edit />
        </IconButton>
      )}
      <IconButton kind="tertiary" label="Delete" onClick={deleteTodo}>
        <TrashCan />
      </IconButton>
    </ContainedListItem>
  );
};

export default TodoListItem;
