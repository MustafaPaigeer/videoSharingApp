import React from 'react';
import styled from 'styled-components';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';

const Container = styled.div`
display: flex;

`;
const Main = styled.div`

`;
const Wrapper = styled.div`

`;

function App() {
  return (
<Container>
    <Menu>
      <Main>
        <Navbar />
        <Wrapper>
          Video Arts
        </Wrapper>
      </Main>
    </Menu>



</Container>
  );
}

export default App;
