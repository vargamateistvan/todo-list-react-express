import actions from "../actions";
import { Action, State } from "../types";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.setTodos: {
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
