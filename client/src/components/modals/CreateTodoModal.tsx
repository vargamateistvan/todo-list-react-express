import React, { useState } from "react";
import { Modal, TextInput, TextArea } from "@carbon/react";
import { apiURL } from "../TodoList";

interface CreateTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (todo: string) => void;
}

type Todo = {
  name: string;
  description: string;
};

const CreateTodoModal: React.FC<CreateTodoModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [todo, setTodo] = useState<Todo | null>({
    name: "",
    description: "",
  });

  const createTodo = async () => {
    const response = await fetch(`${apiURL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const createdTodo = await response.json();
    console.log(createdTodo);
    setTodo({
      name: "",
      description: "",
    });
    onCreate(createdTodo);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onRequestClose={onClose}
      modalHeading="Create Todo"
      primaryButtonText="Create"
      secondaryButtonText="Cancel"
      onSecondarySubmit={onClose}
      onRequestSubmit={createTodo}
    >
      <TextInput
        id="todo-input"
        labelText="Todo Name"
        value={todo?.name}
        required={true}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <TextArea
        id="todo-input"
        labelText="Todo Description"
        value={todo?.description}
        required={true}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
    </Modal>
  );
};

export default CreateTodoModal;
