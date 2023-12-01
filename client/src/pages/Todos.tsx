import { FlexGrid } from "@carbon/react";
import TodoList from "../components/TodoList";

const Todos = () => {
  return (
    <FlexGrid fullWidth>
      <TodoList />
    </FlexGrid>
  );
};

export default Todos;
