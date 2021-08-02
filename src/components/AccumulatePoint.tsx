import React, { useState } from 'react';

import {ClientData} from '../type';
import InputPhoneNumber from './InputPhoneNumber';
import styled from 'styled-components';
import theme from '../style/theme';
import { updateClientData } from '../api';

const InputCont = styled.div`
  width: 70%;
  height: 500px;
  /* border: 2px solid ${({ theme }) => theme.colors.indigo}; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const InputBox = styled.div`  
  border-radius: 10px;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  
  width: 400px;
  height: 50px;
  margin: 10px 0 10px 0;
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

const StyledInput = styled.input`
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

const StyledButton = styled.button`
  width: 150px;
  height: 60px;
  margin-top: 10px;  
  border: none;
  color: white;
  font-weight: bold;
  font-size: 15pt;
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

const SwitchBox = styled.div`
  width: 400px;
  height: 50px;
  /* border:1px solid gray; */
  border-radius: 10px;
  display: flex;
`;

const SwitchPoint = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 16pt;

  transition: .3s;
  :hover{
    transition: .3s;
  }
`;

const SetPointComp = styled.div`
  display: flex;
  align-items: center;
`

const SetPointBox = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
  color: white;
  font-size: 25pt;  
  text-align: center;    
  cursor: pointer;
  
  transition: .3s;
  :hover{
    transition: .3s;
    transform: scale(0.95);
  }
`;


const AccumulatePoint = () => {
  const [staticPhoneNum, setStaticPhoneNum] = useState<string>("");
  const [phoneNum1, setphoneNum1] = useState<string>("010");
  const [phoneNum2, setphoneNum2] = useState<string>("");
  const [phoneNum3, setphoneNum3] = useState<string>("");
  const [clientInfo, setClientInfo] = useState<ClientData>({
    key: "",
    name: "",
    phonenumber: "",
    point: -1,
    buycount:-1,
  });
 
  const [addPoint, setAddPoint] = useState<number>(500);
  const [point, setPoint] = useState<number>(0);
  const [switchButton, setSwitchbutton] = useState<boolean>(false);

  //적립 확인 팝업
  const checkPopup = () => {
    if (clientInfo.name !== "등록된 사용자가 없어요") {
      if (clientInfo.name !== '') {
        if (window.confirm(
          !switchButton ?
            clientInfo.name + '님의 현재포인트 ' + clientInfo.point + '에 '
            + addPoint + '를 적립합니다!' :
            clientInfo.name + '님의 현재포인트 ' + clientInfo.point + '에 '
            + addPoint + '를 사용합니다!'
        )) {
          !switchButton ?
            updateClientData({
              phonenumber: staticPhoneNum,
              point: clientInfo.point + addPoint,
              pointhistory: {
                date: (new Date()).toLocaleString(),
                point: addPoint,
              },
              buycount: clientInfo.buycount+1
            }) : clientInfo.point >= addPoint ?
              updateClientData({
                phonenumber: staticPhoneNum,
                point: clientInfo.point - addPoint,
                pointhistory: {
                  date: (new Date()).toLocaleString(),
                  point: -addPoint,
                },
                buycount: clientInfo.buycount+1
              }) : alert("포인트부족!");
        }
        window.location.reload();
      }
    }
  }

  return (    
    <InputCont>
      <InputPhoneNumber
        clientInfo={clientInfo}
        phoneNum1 = {phoneNum1}
        phoneNum2={phoneNum2}
        phoneNum3={phoneNum3}
        setStaticPhoneNum = {setStaticPhoneNum}
        setPhoneNum1={setphoneNum1}
        setPhoneNum2={setphoneNum2}
        setPhoneNum3={setphoneNum3}
        setClientInfo={setClientInfo}
        setClientPoint={setPoint}
      />
      <SwitchBox>
        <SwitchPoint
          style={{
            border: !switchButton ? '1px solid ' + theme.colors.pointfontcolor :'1px solid ' +theme.colors.orange,
            borderRight: 0,
            backgroundColor: !switchButton ? theme.colors.pointfontcolor : 'white',
            color: !switchButton ? 'white' : theme.colors.pointfontcoloralpha,
            borderRadius: '10px 0 0 10px'            
          }}
          onClick={()=> setSwitchbutton(false)}
        >포인트적립</SwitchPoint>
        <SwitchPoint
          style={{
            border: switchButton ? '1px solid ' + theme.colors.orange : '1px solid ' + theme.colors.pointfontcolor,
            borderLeft: 0,
            backgroundColor: switchButton ? theme.colors.orange : 'white',
            color: !switchButton ? theme.colors.orangealpha : 'white',
            borderRadius: '0 10px 10px 0'
          }}
          onClick={()=> setSwitchbutton(true)}
        >포인트사용</SwitchPoint>
      </SwitchBox>
      <InputBox>
        <StyledText
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              color: theme.colors.orange,
            }}
          >현재 포인트</StyledText>
          <StyledText
            style={{
              justifyContent:'flex-end',
              textAlign:'right',
              width: '250px',
              padding: '0 10px 0 5px',
              color: theme.colors.orange,
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",            
            }}
          >{point + "P"}</StyledText>
      </InputBox>

      <SetPointComp>
        <div style={{width:'100px'}}></div>
        <SetPointBox
          onClick={()=>setAddPoint(addPoint-100)}
        >-</SetPointBox>
        <InputBox>
          <StyledText
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              color: theme.colors.pointfontcolor,
            }}
          >{ !switchButton ?
            "적립포인트" : "사용포인트"}</StyledText>
          <StyledInput
            value={addPoint}
            type="number"          
            style={{ width: "60%" }}
            onChange={(e)=> setAddPoint( parseInt(e.target.value))}
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
        </InputBox>
        <SetPointBox
          onClick={()=>setAddPoint(addPoint+100)}
        >+</SetPointBox>
        <SetPointBox
          style={{
            width: '100px',
            margin: 0,
            fontSize: '18pt',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={()=>setAddPoint(4000)}
        >4000P</SetPointBox>
      </SetPointComp>

      <InputBox style={{
        justifyContent: "center",        
      }}>
        <StyledText
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            color: theme.colors.greenfontcolor,
          }}
        >{ !switchButton ?
          "적립후 포인트" : "사용후 포인트"}</StyledText>
        <StyledText
          style={{
            justifyContent:'flex-end',
            textAlign:'right',
            width: '250px',
            padding: '0 10px 0 5px',
            color: theme.colors.greenfontcolor,
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",            
          }}
        >{!switchButton ?
          (addPoint + point).toString() + "P"
          : (point - addPoint).toString() + "P"}</StyledText>
      </InputBox>
      <StyledButton
        style={{
          backgroundColor: !switchButton ? theme.colors.pointfontcolor
            : clientInfo.point >= addPoint ? theme.colors.orange : theme.colors.lightgray,
        }}
        onClick={() => {
          checkPopup()          
        }}
        // 서버작업 필요
      >{ !switchButton ?
          "적립하기" :
          clientInfo.point >= addPoint ?
          "사용하기" : "포인트부족"}</StyledButton>
    </InputCont>
  );
}

export default AccumulatePoint;