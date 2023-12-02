import { useCallback, useEffect, useState } from "react";
import useStateContext from "../state/context/state/use-state-context";
import useDispatchContext from "../state/context/dispatch/use-dispatch-context";
import actions from "../state/actions";
import { TodoType } from "../state/types";
import { Button } from "@carbon/react";
import TodoListItem from "./TodoListItem";
import CreateTodoModal from "./modals/CreateTodoModal";
import TodoListContainer from "../containers/TodoListContainer";

export const apiURL = "http://localhost:8080/api";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const { todos } = useStateContext();
  const dispatch = useDispatchContext();

  const [openTodoModal, setOpenTodoModal] = useState(false);

  const getTodos = useCallback(async () => {
    const response = await fetch(`${apiURL}/todos`);
    const todos = await response.json();
    dispatch({
      type: actions.setTodos,
      payload: todos.data,
    });
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <CreateTodoModal
        isOpen={openTodoModal}
        onClose={() => setOpenTodoModal(false)}
        onCreate={getTodos}
      ></CreateTodoModal>
      <TodoListContainer
        label={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>Todo list</span>
            <Button onClick={() => setOpenTodoModal(true)}>Create Todo</Button>
          </div>
        }
        kind="on-page"
      >
        {todos?.map((todo: TodoType) => {
          return (
            <TodoListItem todo={todo} key={todo._id} refreshList={getTodos} />
          );
        })}
      </TodoListContainer>
    </>
  );
};

export default TodoList;
