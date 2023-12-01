import { createContext } from 'react';
import { State } from '../../types';
import { STATE } from '../../state';

const StateContext = createContext<State>(STATE);

export default StateContext;
