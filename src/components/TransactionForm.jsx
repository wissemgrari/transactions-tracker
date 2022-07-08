import styled from 'styled-components';
import { useState, useContext } from 'react';
import { TransactionContext } from '../contexts/transactionContext';

const TransactionForm = () => {
  const { dispatch } = useContext(TransactionContext);
  const [form, setForm] = useState({
    text: '',
    amount: 0,
  });
  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TRANSACTION',
      transaction: {
        text: form.text,
        amount: form.amount,
      },
    });
    setForm({
      text: '',
      amount: 0,
    });
  };

  const transformSign = () => {
    setForm((prevState) => ({
      ...prevState,
      amount: prevState.amount * -1,
    }));
  };

  return (
    <Container>
      <Header>
        <h2>Add new transaction</h2>
      </Header>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          name='text'
          id='text'
          placeholder='Enter text...'
          onChange={onChange}
          value={form.text}
          required
        />
        <label htmlFor='amount'>
          Amount
          <br /> (negative - expense, positive - income)
        </label>
        <Amount>
          <span onClick={transformSign}>+/-</span>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter amount...'
            onChange={onChange}
            value={form.amount}
            required
          />
        </Amount>

        <button type='submit'>Add transaction</button>
      </Form>
    </Container>
  );
};
export default TransactionForm;

const Container = styled.div`
  margin-top: 30px;
`;

const Header = styled.div`
  h2 {
    padding-bottom: 10px;
    margin: 30px 0 10px;
  }
  border-bottom: 1px solid #bbb;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 1.1rem;
  }
  input {
    margin: 10px 0;
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
  button[type='submit'] {
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: var(--box-shadow);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
  }
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  span {
    background-color: grey;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: #9c88ff;
    }
  }
`;
