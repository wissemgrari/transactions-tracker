import { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { transactionReducer } from '../reducers/transactionReducer';

// Initialize the state
const initialState = {
  transactions: [],
};

// Create the context
export const TransactionContext = createContext(initialState);

const TransactionContextProvider = (props) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);
  return (
    <TransactionContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </TransactionContext.Provider>
  );
};
export default TransactionContextProvider;
