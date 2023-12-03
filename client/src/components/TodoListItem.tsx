import React, { useState } from "react";
import {
  ContainedListItem,
  TextInput,
  Checkbox,
  Button,
  IconButton,
  TextArea,
} from "@carbon/react";
import { Edit, TrashCan } from "@carbon/icons-react";
import { TodoType } from "../state/types";
import { apiURL } from "./TodoList";
import DeleteTodoModal from "./modals/DeleteTodoModal";
import Title from "../containers/typography/Title";
import SubTitle from "../containers/typography/SubTitle";
import Content from "../containers/typography/Content";

interface TodoListItemProps {
  todo: TodoType;
  refreshList: () => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, refreshList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [completedTodo, setCompletedTodo] = useState(!!todo.closedAt);
  const [openDeleteTodoModal, setOpenDeleteTodoModal] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
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

  return (
    <ContainedListItem
      className="todo-list-item"
      action={
        isEditing ? (
          <></>
        ) : (
          <div className="todo-list-item-action-buttons">
            <IconButton kind="tertiary" label="Edit" onClick={handleEdit}>
              <Edit />
            </IconButton>
            <IconButton
              kind="danger--tertiary"
              label="Delete"
              onClick={() => setOpenDeleteTodoModal(true)}
            >
              <TrashCan />
            </IconButton>

            <DeleteTodoModal
              isOpen={openDeleteTodoModal}
              onClose={() => setOpenDeleteTodoModal(false)}
              onCreate={refreshList}
              todoId={todo._id}
            ></DeleteTodoModal>
          </div>
        )
      }
    >
      {isEditing ? (
        <div className="todo-list-item-content">
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
          <div className="todo-list-item-edit-button">
            <Button kind="tertiary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={editTodo}>Save</Button>
          </div>
        </div>
      ) : (
        <div className="todo-list-item-content">
          <Title>Name: {todo.name}</Title>
          <SubTitle>Description: </SubTitle>
          <Content>{todo.description}</Content>
          <SubTitle>Created at:</SubTitle>
          <Content>{new Date(todo.createdAt).toLocaleString("hu-HU")}</Content>
          {completedTodo && todo.closedAt ? (
            <>
              <SubTitle>Completed at:</SubTitle>
              <Content>
                {new Date(todo.closedAt).toLocaleString("hu-HU")}
              </Content>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </ContainedListItem>
  );
};

export default TodoListItem;
