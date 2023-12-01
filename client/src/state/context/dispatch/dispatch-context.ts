import { createContext, Dispatch } from 'react';
import { Action } from '../../types';

const DispatchContext = createContext<Dispatch<Action>>(() => {});

export default DispatchContext;
