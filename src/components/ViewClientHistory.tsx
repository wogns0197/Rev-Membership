import styled, { keyframes } from 'styled-components';

import { FC } from 'react';
import {PointHistory} from '../type';
import React from 'react';

interface bisPlus{
  isPlus: boolean,
}

const HeightAnim = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 300px;
  }
`;

const Main = styled.div`
  width: 60%;
  // height: 300px;
  background-color:white;  
  margin: -10px 0 10px 0;  
  animation: ${HeightAnim} .3s 1 ease-in-out;
  animation-fill-mode: forwards;
  
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const ElementBox = styled.div`
  width:90%;
  height:40px;
  display:flex;
  justify-content: space-around;
  align-items: center;   
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 20px;
`;

const DateBox = styled.div`
  width: 40%;
  height: 30px;
  // background-color: red;
  display:flex;
  justify-content: center;
  align-items: center;    
  color:#483D8B;
`;

const PointBox =styled.div`
  width: 20%;
  height: 20px;
  border-radius: 20px;
  border: ${(props: bisPlus) => props.isPlus ? '1px solid #3792f9' : '1px solid #FF4500'};
  background-color: white;
  display:flex;
  justify-content: center;
  align-items: center;    
  font-weight: bold;
`;

type Props={
  clientHistory: PointHistory[]
}

const ViewClientHistory:FC<Props> = (clientHistory) => {    
  return (
    <Main >
      {
        clientHistory?.clientHistory?.map((el,idx)=>{
          return (<ElementBox>
            <DateBox>{el.date}</DateBox>
            <PointBox isPlus={el.point > 0 ? true : false}>{el.point} P</PointBox>
          </ElementBox>)
        })
      }      
    </Main>
  );
}

export default ViewClientHistory;