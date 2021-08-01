import { Link, RouteComponentProps }from 'react-router-dom';

import ManagePage from './ManagePage';
import PointPage from './PointPage';
import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 50pt;
  position: absolute;
  top: 20px;
  font-weight: lighter;
`;

const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* justify-content: space-around; */
  /* background-color: blue; */
`;

const QuickButton = styled.button`
  color: ${({ theme }) => theme.colors.indigo};
  font-weight: bold;
  font-size: 20pt;

  width: 100%;
  height: 100%;
  
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: .3s;
  &:hover{
    transition-duration: .3s;
    transform:scale(1.05);
  }
`;

const StyledLink = styled(Link)`
  margin: 0 10px 0 10px;
  width: 30%;
  height: 400px;
`;


const MainPage = () => {
  return (
    <Main>
      <Title>레브 포인트관리 페이지</Title>
      <ButtonCont>
        <StyledLink to="PointPage">
          <QuickButton>포인트 적립하기</QuickButton>
        </StyledLink>
        <StyledLink to="ManagePage">
          <QuickButton>관리자 페이지</QuickButton>
        </StyledLink>        
      </ButtonCont>      
    </Main>
  );
}

export default MainPage;