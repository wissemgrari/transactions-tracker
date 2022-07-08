import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h2>Transactions Tracker</h2>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  margin: 20px;
  h2 {
    font-size: 1.7em;
    font-weight: 800;
  }
`;
