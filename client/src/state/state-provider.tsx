import { PropsWithChildren, useReducer } from "react";
import reducer from "./reducer/reducer";
import { STATE } from "./state";
import StateContext from "./context/state/state-context";
import DispatchContext from "./context/dispatch/dispatch-context";

type Props = PropsWithChildren<{}>;

const StateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default StateProvider;
