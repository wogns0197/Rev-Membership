import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({theme})=> theme.colors.pointfontcolor};
`;

const Main = styled.div`
  width: 100%;
  height: 90%;  
`;



const ManagePage = () => {
  const today: Date = new Date();
  return (
    <Body>
      <Header></Header>
      <Main>{today.toLocaleString()}</Main>
    </Body>
  );
}

export default ManagePage;