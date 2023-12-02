import styled from "styled-components";
import { ContainedList } from "@carbon/react";

const TodoListContainer = styled(ContainedList)`
  width: 1000px;
  display: block;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  ul {
    margin-top: 25px;
  }

  .todo-list-item-content {
    width: 800px;
  }

  .todo-list-item-edit-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .todo-list-item-action-buttons {
    margin-top: 20px;
  }
`;

export default TodoListContainer;
