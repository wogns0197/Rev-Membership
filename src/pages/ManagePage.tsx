import { ClientData } from '../type';
import React from 'react';
import ViewClientHistory from '../components/ViewClientHistory';
import ViewClientList from '../components/ViewClientList';
import { getAllClientData } from '../api';
import styled from 'styled-components';
import theme from '../style/theme';
import { useEffect } from 'react';
import { useState } from 'react';

const Body = styled.div`
  width: 100%;
  height: 100vh;  
`;

const Header = styled.div`
  width: 100%;
  height: 5%;
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  height: 95%;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightgray};
`;

const ViewComp = styled.div`
  width: 80%;
  height: 80vh;
  /* border:1px solid ${({ theme }) => theme.colors.pointfontcolor}; */
  border-radius: 5px;
  overflow-y: scroll;
  /* display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center; */
`;



const ManagePage = () => {

  const [DATA, setDATA] = useState<ClientData[]>([{
    name: "등록된 사용자가 없어요",
    phonenumber: "",
    point: -1,
    buycount:-1,
  }]);

  useEffect(() => {
    AsyncGetAllClientData();
  });

  const AsyncGetAllClientData = async () => {
    setDATA((await getAllClientData()).sort((a:any, b:any) => {
      return a.name < b.name ? -1 : a.name > b.namae ? 1 : 0;
    }));
  }
  // Get All ClientData => 비용 많이들 수 있음
  // const DATA: ClientData[] = await getAllClientData();

  return (
    <Body>
      <Header>관리자 페이지</Header>
      <Main>
        <ViewClientList
          isTitle={true}
          clientName={"이름"}
          clientPhoneNum={"전화번호"}
          clientPoint={"현재포인트"}
          clientRegisterDate={"등록일"}
          clientBuyCount={"이용횟수"}
        />
        <ViewComp>          
          {
            DATA.map((el, idx) => {
              return (
                <ViewClientList
                  isTitle={false}
                  clientName={DATA[idx].name!}
                  clientPhoneNum={DATA[idx].phonenumber!}
                  clientPoint={DATA[idx].point! + " P"}
                  clientRegisterDate={DATA[idx].registertime!}
                  clientBuyCount={DATA[idx].buycount!}
                />          
              )
            })
          }          
        </ViewComp>
      </Main>
    </Body>
  );
}

export default ManagePage;