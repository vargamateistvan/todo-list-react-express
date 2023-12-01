import actions from "../actions";
import { Action, TodoType, State } from "../types";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.setTodos: {
      console.log(actions.setTodos, action, action.payload);

      state = {
        ...state,
        todos: action.payload,
      };
      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default reducer;
