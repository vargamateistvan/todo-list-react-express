import { useCallback, useEffect, useState } from "react";
import useStateContext from "../state/context/state/use-state-context";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import actions from "../state/actions";
import { TodoType } from "../state/types";
import {
  Button,
  ContainedList,
  ModalWrapper,
  TextArea,
  TextInput,
} from "@carbon/react";
import TodoListItem from "./TodoListItem";
import CreateTodoModal from "./CreateTodoModal";

export const apiURL = "http://localhost:8080/api";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos } = useStateContext();
  const dispatch = useDispatchContext();

  const [openTodoModal, setOpenTodoModal] = useState(false);
  const [todo, setTodo] = useState<TodoType>({ name: "", description: "" });

  const getTodos = useCallback(async () => {
    const response = await fetch(`${apiURL}/todos`);
    const todos = await response.json();
    dispatch({
      type: actions.setTodos,
      payload: todos.data,
      // payload: [
      //   {
      //     _id: "6568a942320bf6e264ec7614",
      //     name: "modified name",
      //     description: "asd asd asd",
      //     createdAt: "2023-11-30T15:24:50.846Z",
      //     closedAt: null,
      //     __v: 0,
      //   },
      // ],
    });
  }, []);

  useEffect(() => {
    getTodos();
    console.log("getTodos", todos);
  }, []);

  const createTodo = async () => {
    console.log("CCCC todo", todo);

    const response = await fetch(`${apiURL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(todo),
    });
    const createdTodo = await response.json();
    console.log(createdTodo);
  };

  return (
    <>
      <Button onClick={() => setOpenTodoModal(true)}>Create Todo</Button>
      <CreateTodoModal
        isOpen={openTodoModal}
        onClose={() => setOpenTodoModal(false)}
        onCreate={getTodos}
      ></CreateTodoModal>
      {/* <ModalWrapper
        buttonTriggerText="Create todo"
        modalHeading="Create todo"
        handleSubmit={createTodo}
      >
        <TextInput
          id="todo-input"
          labelText="Todo"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <TextArea
          id="todo-input"
          labelText="Todo"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </ModalWrapper> */}
      <ContainedList label="Todo list" kind="on-page">
        {todos?.map((todo: TodoType) => {
          return (
            <TodoListItem todo={todo} key={todo._id} refreshList={getTodos} />
          );
        })}
      </ContainedList>
    </>
  );
};

export default TodoList;
