import { Dispatch, FC, SetStateAction } from 'react';

import { ClientData } from '../type';
import React from 'react';
import { getClientData } from '../api';
import styled from 'styled-components';
import { useState } from 'react';

interface NameCompProps {
  isOpen: boolean,
}

const Main = styled.div`
  width:100%;
  height: 150px;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightindigo};
  border-radius: 5px;
`;

const StyledInput = styled.input`
  border: none;
  margin: 0 5px 0 5px;
  width: 60px;
  height: 40px;
  text-align: center;
  font-weight: lighter;
  font-size: 14pt;
  padding:0;
  
  :focus{
    outline-style: none;
  }
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin:0;
  }
`;

const StyledButton = styled.div`
  width: 50px;
  height: 41px;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  color: white;
  font-weight: bold;
  border-radius: 5px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 번호 입력후 자동으로 검색기능 필요

const Name = styled.div`
  background-color: ${({ theme }) => theme.colors.indigo};
  color: white;
  border-radius: 10px;
  width: 400px;
  /* height: 100px; */
  height: ${(props:NameCompProps) => props.isOpen ? "200px": "0px"};
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20pt;
  transition: .3s;
  margin-top: 20px;
`;

type Props = {
  phoneNum1: string,
  phoneNum2: string,
  phoneNum3: string,
  clientInfo: ClientData,
  setStaticPhoneNum:Dispatch<SetStateAction<string>>,
  setPhoneNum1: Dispatch<SetStateAction<string>>,
  setPhoneNum2: Dispatch<SetStateAction<string>>,
  setPhoneNum3: Dispatch<SetStateAction<string>>,
  setClientInfo: Dispatch<SetStateAction<ClientData>>,
  setClientPoint: Dispatch<SetStateAction<number>>,
}

const InputPhoneNumber: FC<Props> = ({
  phoneNum1,
  phoneNum2,
  phoneNum3,
  clientInfo,
  setStaticPhoneNum,
  setPhoneNum1,
  setPhoneNum2,
  setPhoneNum3,
  setClientInfo,
  setClientPoint,
}) => {
  
  const [isOpenNameComp, setIsOpenNameComp] = useState<boolean>(false);
  const [HTMLELEMENT_REF3, setREF3] = useState<HTMLInputElement>();
  const [HTMLELEMENT_BUTTONREF, setButtonREF] = useState<HTMLDivElement>();  
  

  const searchNamebyPhoneNum = async (phoneNum: string) => {
    const responseData = await getClientData(phoneNum);    
    console.log(responseData);
    if (responseData.name !== "") {
      setClientInfo(responseData);
      setClientPoint(responseData.point);  
    }
    else {
      setClientInfo({
        name: "등록된 사용자가 없어요",
        phonenumber: "",
        point: -1,
        buycount:-1,
      });
      setClientPoint(0);
    }
    
    
  }

  return (
    <Main>
      <InputCont>        
        <InputBox>
          <StyledInput
            type="number"
            style={{ width: "40px" }}
            value="010"
            onChange={(e) => setPhoneNum1(e.target.value)}
          />
          -
          <StyledInput          
            type="number"
            min={0}
            onChange={(e) =>
            {
              if (e.target.value.length < 5) { setPhoneNum2(e.target.value) }
              if (e.target.value.length === 4) { HTMLELEMENT_REF3?.focus()}
            }
            }
            value={phoneNum2}
          />
          -
          <StyledInput
            ref = {(ref)=> setREF3(ref as any)}
            type="number"
            min={0}          
            onChange={(e) =>
              {
              if (e.target.value.length < 5) { setPhoneNum3(e.target.value) }
              
              // 마지막 전화번호 4자리 입력시 자동 클릭인데 3개 클릭일때 자동 클릭됨, 단순히 alert여서 그런듯
                // if (e.target.value.length === 4) { HTMLELEMENT_BUTTONREF?.click()}
              }}
              value={phoneNum3}
          />
        </InputBox>
        <StyledButton
          ref={(ref) => setButtonREF(ref as any)}
          onClick={() => {          
            searchNamebyPhoneNum(phoneNum1 + phoneNum2 + phoneNum3)
            setIsOpenNameComp(true);
            setStaticPhoneNum(phoneNum1 + phoneNum2 + phoneNum3)
            setPhoneNum1("010")
            setPhoneNum2("")
            setPhoneNum3("")                                    
          }}
        >확인
        </StyledButton>
      </InputCont>
      <Name isOpen={isOpenNameComp}>{clientInfo?.name}</Name>      
    </Main>    
  );
}

export default InputPhoneNumber;