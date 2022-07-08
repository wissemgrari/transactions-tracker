import styled from 'styled-components';
import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';

const History = () => {
  const { transactions, dispatch } = useContext(TransactionContext);
  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_TRANSACTION', id });
  };
  return (
    <Container>
      <Header>
        <h2>History</h2>
      </Header>
      <Content>
        <ul>
          {transactions.map((transaction) => {
            return (
              <TranscationGroup key={transaction.id}>
                <span onClick={() => handleDelete(transaction.id)}>x</span>
                <Transcation
                  className={transaction.amount > 0 ? 'green' : 'red'}
                >
                  {transaction.text}{' '}
                  <span>
                    {transaction.amount > 0
                      ? `+ $${Math.abs(transaction.amount)}`
                      : `- $${Math.abs(transaction.amount)}`}
                  </span>
                </Transcation>
              </TranscationGroup>
            );
          })}
        </ul>
      </Content>
    </Container>
  );
};
export default History;

const Container = styled.div`
  margin-top: 20px;
`;

const Header = styled.div`
  h2 {
    padding-bottom: 10px;
    margin: 30px 0 10px;
  }
  border-bottom: 1px solid #bbb;
`;

const Content = styled.div`
  ul {
    list-style: none;
  }
`;

const Transcation = styled.li`
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex: 1;
  justify-content: space-between;
  font-size: 1.2rem;
  :hover {
    opacity: 0.7;
  }
`;

const TranscationGroup = styled.div`
  display: flex;
  align-items: center;
  > span {
    background-color: grey;
    padding: 10px;
    font-size: 1.2rem;
    color: #fff;
    margin-right: 5px;
    cursor: pointer;
    :hover {
      background-color: #ff1744;
    }
  }
`;
