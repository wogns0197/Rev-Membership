import { ClientData } from '../type';
import React from 'react';
import ViewClientList from '../components/ViewClientList';
import { getAllClientData } from '../api';
import styled from 'styled-components';
import theme from '../style/theme';
import { useEffect } from 'react';
import { useState } from 'react';

interface bisShow{
  isShow: boolean,
}

const Body = styled.div`
  width: 100%;
  height: 100vh;  
`;

const ToolComp = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchBox = styled.input`
  width: 100px;
  height: 30px;    
  border: 1px solid skyblue;
  border-radius: 5px;
  :focus{
    outline-style: none;
  }
  text-align: center;
  font-size:15pt;
`;

const RemoveBox = styled.div`
  width: 40px;
  height: 30px;
  background-color: ${({theme}) => theme.colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const ManagerComp = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  top: 20%;
  left: 40%;
  background-color: ${({theme}) => theme.colors.orange};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
  border-radius: 5px;
  visibility: ${(props:bisShow) => props.isShow ? 'visible' : 'hidden'};
`;

const ManagerPassword = styled.input`
  width: 70px;
  height: 30px;
  border: 1px solid red;
  border-radius: 10px;
  text-align: center;
`;

const PasswordCheck = styled.div`
  width: 40px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
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
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
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
  const [searchText, setSearchText] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isManagerShow, setManagerShow] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const checkPassword = () => {
    setIsDelete(true);
    setManagerShow(false);
    setPassword("");
  }

  return (
    <Body>
      <ManagerComp isShow={isManagerShow}>
        삭제전용 비밀번호
        <ManagerPassword
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></ManagerPassword>
        <PasswordCheck
          onClick={ () => password === "4004" ? checkPassword() : setPassword("")}
        >확인</PasswordCheck>
      </ManagerComp>
      <Header>관리자 페이지</Header>      
      <Main>
        <ToolComp>
          <SearchBox
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={"이름검색"}
          />
          <RemoveBox
            onClick={()=>setManagerShow(!isManagerShow)}
          >삭제
          </RemoveBox>
        </ToolComp>
        <ViewClientList
          isTitle={true}
          clientName={"이름"}
          clientPhoneNum={"전화번호"}
          clientPoint={"현재포인트"}
          clientRegisterDate={"등록일"}
          clientBuyCount={"이용횟수"}
          clientHistory={[{ date: "", point: -1 }]}
          isDelete={false}
        />
        {
          searchText !== "" ?
            (<ViewComp>
              {
                DATA.map((el, idx) => {
                  if (DATA[idx].name?.includes(searchText)) {
                    return (
                      <ViewClientList
                        isTitle={false}
                        clientName={DATA[idx].name!}
                        clientPhoneNum={DATA[idx].phonenumber!}
                        clientPoint={DATA[idx].point! + " P"}
                        clientRegisterDate={DATA[idx].registertime!}
                        clientBuyCount={DATA[idx].buycount!}
                        clientHistory={DATA[idx].pointhistory!}
                        isDelete={isDelete}
                      />
                    )  
                  }
                  return null;
                })
              }
            </ViewComp>) :
            (<ViewComp>
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
                      clientHistory={DATA[idx].pointhistory!}
                      isDelete={isDelete}
                    />
                  )
                })
              }
            </ViewComp>)
        }
      </Main>
    </Body>
  );
}

export default ManagePage;