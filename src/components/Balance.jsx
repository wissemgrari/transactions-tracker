import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';
import styled from 'styled-components';

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions.map((transaction) => Number(transaction.amount));
  const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <Container>
      <h3>YOUR BALANCE</h3>
      <h1>${balance}</h1>
      <Box>
        <Income>
          <h3>INCOME</h3>
          <p>${income}</p>
        </Income>
        <Expense>
          <h3>EXPENSE</h3>
          <p>${Math.abs(expense)}</p>
        </Expense>
      </Box>
    </Container>
  );
};
export default Balance;

const Container = styled.div`
  h3 {
    font-size: 1.2rem;
  }
  h1 {
    letter-spacing: 1px;
    font-size: 2.4rem;
  }
`;
const Box = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  letter-spacing: 1px;
`;

const Income = styled.div`
  flex: 1;
  text-align: center;
  border-right: 1px solid #dedede;
  p {
    font-size: 20px;
    letter-spacing: 1px;
    padding: 15px 0;
    color: #2ecc71;
  }
`;
const Expense = styled.div`
  flex: 1;
  text-align: center;
  p {
    font-size: 20px;
    letter-spacing: 1px;
    padding: 15px 0;
    color: #c0392b;
  }
`;
