import './index.css';
import styled from 'styled-components';
import Header from './components/Header';
import Balance from './components/Balance';
import History from './components/History';
import TransactionForm from './components/TransactionForm';
import TransactionContextProvider from './contexts/transactionContext';

function App() {
  return (
    <TransactionContextProvider>
      <Container>
        <Header />
        <Wrapper>
          <Balance />
          <History />
          <TransactionForm />
        </Wrapper>
      </Container>
    </TransactionContextProvider>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 20px auto;
  width: 450px;
  @media (min-width: 360px) {
    width: 320px;
  }
`;
