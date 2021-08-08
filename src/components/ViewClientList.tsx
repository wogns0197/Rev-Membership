import styled, {css} from 'styled-components';

import { FC } from 'react';
import {PointHistory} from '../type';
import React from 'react';
import ViewClientHistory from '../components/ViewClientHistory';
import { removeClientData } from '../api';
import { useState } from 'react';

interface bisTitle{
  isTitle: boolean,
}

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;

const Box = styled.div`
  width: ${(props: bisTitle) => props.isTitle ? "78%" : "97%"};
  height: 50px;
  border-radius: 10px;
  background-color: white; 
  margin-bottom: 10px;
  box-shadow: 1px 1px 0px 0px rgba(0,0,0,0.1);

  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor:pointer;

  border: ${(props: bisTitle) => props.isTitle ? "2px solid skyblue" : "none"};
  
  transition: .3s;
  :hover{
    transition: .3s;
    transform:scale(1.02);
  }
`;

const BoxStyle = css`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border:1px solid red; */
`;

const NameBox = styled.div`
  ${BoxStyle};
  width: 15%;
  font-weight: bold;  
  color: ${({ theme }) => theme.colors.pointfontcolor};
`;

const PhonenumBox = styled.div`
  ${BoxStyle};
  width: 20%;
  color: ${({ theme }) => theme.colors.greenfontcolor};
`;
const PointBox = styled.div`
  ${BoxStyle};
  width: 15%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 20px;
`;

const BuycountBox = styled.div`
  ${BoxStyle};
  width: 8%;
  color: #B8860B;
`;

const RegisterBox = styled.div`
  ${BoxStyle};
  width: 20%;
  color:#483D8B;
`;

const DeleteBox = styled.div`
  width: 30px;
  height: 20px;
  font-size:10pt;
  border-radius: 5px;
  background-color: red;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;  
`;


type Props = {
  clientName: string,
  clientPhoneNum: string,
  clientPoint: string,
  clientRegisterDate: string,
  clientBuyCount: number | string,
  isTitle: boolean,
  clientHistory: PointHistory[]
  isDelete: boolean,
}

const ViewClientList:FC<Props> = ({
  clientName,
  clientPhoneNum,
  clientPoint,
  clientRegisterDate,
  clientBuyCount,
  isTitle,
  clientHistory,
  isDelete,
}) => {

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const removePopup = (name: string, phonenum: string) => {
    if (window.confirm('삭제시 복구가 불가능합니다. 정말로 삭제하시겠어요 ?')) {
      removeClientData(name, phonenum);
      window.location.reload();
      alert('삭제완료');
    }
  }

  return (
    <Main>
      <Box isTitle={isTitle} onClick={() => setIsClicked(!isClicked) }>
        <NameBox>{clientName}</NameBox>
        <PhonenumBox>        
          {isTitle ? clientPhoneNum :
            clientPhoneNum.substr(0, 3) +
            "-" + clientPhoneNum.substr(3, 4) + 
            "-" + clientPhoneNum.substr(7,4)}
        </PhonenumBox>
        <PointBox>{clientPoint}</PointBox>
        <RegisterBox>{(clientRegisterDate)?.substr(0,11)}</RegisterBox>
        <BuycountBox>{clientBuyCount}</BuycountBox>
        {isDelete ?
          (<DeleteBox
            onClick={()=>removePopup(clientName, clientPhoneNum)}
          >
            삭제
          </DeleteBox>) : null
        }
        
      </Box>
      {isTitle ? null : isClicked ? 
      (<ViewClientHistory clientHistory={clientHistory} />) : null}           
    </Main>
    
  );
}

export default ViewClientList;