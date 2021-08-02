import React, { useState } from "react";

import { registerClientData } from "../api";
import styled from "styled-components";
import theme from "../style/theme";

const Main = styled.div`
  width:100%;
  height: 300px;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -200px;
`;

const NameInput = styled.input`
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.lightindigo};
  width: 240px;
  height: 39px;
  text-align: center;
  border-radius: 5px;
  font-size: 13pt;
  margin-bottom: 5px;  
`;

const InputBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightindigo};
  border-radius: 5px;
`;

const StyledInput = styled.input`
  border: none;
  margin: 0 5px 0 5px;
  width: 80px;
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
  width: 250px;
  height: 41px;  
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  color: white;
  font-weight: bold;
  border-radius: 5px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: .3s;
  :hover{
    transition: .3s;
    transform:scale(1.03);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledText = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightindigo};
  color:  ${({theme}) => theme.colors.placholderindigo};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-weight: bold;  
`;

const InputBoxReg = styled.div`  
  border-radius: 10px;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  
  width: 250px;
  height: 50px;
  margin: 10px 0 10px 0;
`;

const StyledInputReg = styled.input`
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightindigo};
  color : ${({ theme }) => theme.colors.pointfontcolor};
  font-weight: bold;
  text-align: right;
  font-size: 18pt;
  
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin:0;
  }
  :focus{
    outline-style: none;
  }
`;

const RegisterComp = () => {

  const [HTMLELEMENT_REF3, setREF3] = useState<HTMLInputElement>();
  const [RegClientName, setRegClientName] = useState<string>("");
  const [RegPhoneNum1, setRegPhoneNum1] = useState<string>("010");
  const [RegPhoneNum2, setRegPhoneNum2] = useState<string>("");
  const [RegPhoneNum3, setRegPhoneNum3] = useState<string>("");
  const [RegPoint, setRegPoint] = useState<number>(500);

  const registerPopup = () => {
    if (window.confirm('이름 : ' + RegClientName + '\n전화번호 : ' + RegPhoneNum1 + RegPhoneNum2 + RegPhoneNum3
    + "\n초기포인트 : " + RegPoint + '\n등록하시겠습니까?')) {
      registerClientData({
        key: "1",
        name: RegClientName,
        phonenumber: RegPhoneNum1 + RegPhoneNum2 + RegPhoneNum3,
        point: RegPoint,
        pointhistory: [{date:"today", point:1000}],
        buycount: 1,
        registertime: (new Date()).toLocaleString(),
      })
    }
    window.location.reload();
  }

  return (
    <Main>
      <NameInput
        placeholder="이름"
        onChange={(e)=> setRegClientName(e.target.value)}
      />
      <InputBox>
      <StyledInput
            type="number"
            style={{ width: "40px" }}
            value="010"
            onChange={(e) => setRegPhoneNum1(e.target.value)}
          />
          -
          <StyledInput          
            type="number"
            min={0}
            onChange={(e) =>
            {
              if (e.target.value.length < 5) { setRegPhoneNum2(e.target.value) }
              if (e.target.value.length === 4) { HTMLELEMENT_REF3?.focus()}
            }
            }
            value={RegPhoneNum2}
          />
          -
          <StyledInput
            ref = {(ref)=> setREF3(ref as any)}
            type="number"
            min={0}          
            onChange={(e) =>
              {
              if (e.target.value.length < 5) { setRegPhoneNum3(e.target.value) }
              
              // 마지막 전화번호 4자리 입력시 자동 클릭인데 3개 클릭일때 자동 클릭됨, 단순히 alert여서 그런듯
                // if (e.target.value.length === 4) { HTMLELEMENT_BUTTONREF?.click()}
              }}
              value={RegPhoneNum3}
        /></InputBox>      
      <InputBoxReg>
        <StyledText
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            color: theme.colors.pointfontcolor,
          }}
        >초기 포인트</StyledText>
        <StyledInputReg
          value={RegPoint}
          type="number"          
          style={{ width: "60%" }}
          onChange={(e)=> setRegPoint(parseInt(e.target.value))}
        />
        <StyledText
          style={{
            width: '10px',
            padding: '0 10px 0 5px',
            color: theme.colors.pointfontcolor,
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >P</StyledText>        
      </InputBoxReg>
      {/* key: String,
    name: String,
    phonenumber: String,
    point: Number,
    buycount: Number, */}
      <StyledButton
        onClick={() => {
          registerPopup()
        }}
      >등록</StyledButton>
    </Main>
  );
}

export default RegisterComp;