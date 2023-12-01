import { useContext } from 'react';
import StateContext from './state-context';

const useStateContext = () => useContext(StateContext);

export default useStateContext;
