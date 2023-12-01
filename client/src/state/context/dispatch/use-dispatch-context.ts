import { useContext } from 'react';
import DispatchContext from './dispatch-context';

const useDispatchContext = () => useContext(DispatchContext);

export default useDispatchContext;
