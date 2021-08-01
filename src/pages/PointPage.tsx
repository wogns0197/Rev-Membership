import AccumulatePoint from '../components/AccumulatePoint';
import CheckPoint from '../components/CheckPoint';
import React from 'react';
import RegisterComp from '../components/RegisterComp';
import styled from 'styled-components';
import theme from '../style/theme';
import { useState } from 'react';

const Main = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid ${({theme}) => theme.colors.lightgray};
  border-bottom: 1px solid ${({theme}) => theme.colors.lightgray};
  background-color: ${({ theme }) => theme.colors.lightindigo};
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const HeaderMenuCont = styled.ul`
  list-style:none;
  height: 100%;
  margin: 0 20px 0 0;
`
const HeaderMenu = styled.li`
  cursor: pointer;
  float: left;
  margin: 0 10px 0 10px;
  height:100%;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontlightgray};
  transition: .3s;
`

const ViewComponent = (menuSelect:number) => {
  switch (menuSelect) {
    case 0:
      return (
        <AccumulatePoint />
      );
    case 1:
      return (
        <CheckPoint />
      );
    case 2:
      return (
        <RegisterComp />
      );
  }
  
}

const PointPage = () => {
  const [menuSelect, setMenuSelect] = useState<number>(0);
  
  return (
    <Main>
      <Header>
        <HeaderMenuCont>
          <HeaderMenu
            onClick={() => setMenuSelect(0)}
            style={ menuSelect === 0 ? { color : theme.colors.indigo} : { color : theme.colors.lightindigo}}
          >포인트적립</HeaderMenu>
          <HeaderMenu
            onClick={() => setMenuSelect(1)}
            style={ menuSelect === 1 ? { color : theme.colors.indigo} : { color : theme.colors.lightindigo}}
          >적립포인트 확인</HeaderMenu>
          <HeaderMenu
            onClick={() => setMenuSelect(2)}
            style={ menuSelect === 2 ? { color : theme.colors.indigo} : { color : theme.colors.lightindigo}}
          >고객등록</HeaderMenu>
        </HeaderMenuCont>
      </Header>      
      {ViewComponent(menuSelect)}
    </Main>
  );
}

export default PointPage;