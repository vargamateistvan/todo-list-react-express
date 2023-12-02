import React from "react";
import { Modal } from "@carbon/react";
import { apiURL } from "../TodoList";

interface DeleteTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (todo: string) => void;
  todoId: string;
}

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  todoId,
}) => {
  const deleteTodo = async () => {
    const response = await fetch(`${apiURL}/todos/${todoId}`, {
      method: "DELETE",
    });
    const deletedTodo = await response.json();
    console.log(deletedTodo);
    onCreate(deletedTodo);
    onClose();
  };

  return (
    <Modal
      danger
      open={isOpen}
      onRequestClose={onClose}
      modalHeading="Are you sure you want to delete this todo?"
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      onSecondarySubmit={onClose}
      onRequestSubmit={deleteTodo}
    ></Modal>
  );
};

export default DeleteTodoModal;
