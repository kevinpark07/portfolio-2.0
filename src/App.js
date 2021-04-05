import NavBar from './NavBar';
import HomePage from './HomePage';
import styled from 'styled-components';

function App() {
  return (
    <AppDiv>
      <NavBar />
      <HomePage />
    </AppDiv>
  )
}

export default App;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: solid blue;
`