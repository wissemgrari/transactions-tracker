import { v4 as uuidv4 } from 'uuid';

export const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            text: action.transaction.text,
            amount: action.transaction.amount,
            id: uuidv4(),
          },
        ],
      };

    case 'REMOVE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };

    default:
      return state;
  }
};
