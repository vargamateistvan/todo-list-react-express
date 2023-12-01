import actions from "actions";

export type TodoType = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  closedAt: string | null;
};

export type Action = {
  type: actions.setTodos;
  payload: TodoType[];
};

export type State = {
  todos: TodoType[];
};
