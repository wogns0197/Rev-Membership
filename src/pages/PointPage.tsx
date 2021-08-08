import AccumulatePoint from '../components/AccumulatePoint';
import React from 'react';
import RegisterComp from '../components/RegisterComp';
import UsePoint from '../components/UsePoint';
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
  height: 100px;    
  background-color: ${({ theme }) => theme.colors.pointfontcoloralpha};
  position: absolute;
  top: 0px;
  margin:0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;

const Bottom = styled.div`
  width:100%;
  height: 5%;
  position: absolute;
  bottom: 0;
  font-size:10pt;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.pointfontcoloralpha}; 
`;

const HeaderMenuCont = styled.ul`
  list-style:none;
  height: 50%;
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
        <RegisterComp />
      );
    default:
      break;
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
          >포인트관리</HeaderMenu>          
          <HeaderMenu
            onClick={() => setMenuSelect(1)}
            style={ menuSelect === 1 ? { color : theme.colors.indigo} : { color : theme.colors.lightindigo}}
          >고객등록</HeaderMenu>
        </HeaderMenuCont>
      </Header>      
      {ViewComponent(menuSelect)}
      <Bottom>
        Copyright 2021. 권재훈 all rights reserved.
      </Bottom>
    </Main>
  );
}

export default PointPage;