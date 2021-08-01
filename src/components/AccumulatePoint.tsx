import React, { useState } from 'react';

import InputPhoneNumber from './InputPhoneNumber';
import styled from 'styled-components';
import theme from '../style/theme';

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
  background-color: ${({ theme }) => theme.colors.pointfontcolor};
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


const AccumulatePoint = () => {
  const [phoneNum1, setphoneNum1] = useState<string>("010");
  const [phoneNum2, setphoneNum2] = useState<string>("");
  const [phoneNum3, setphoneNum3] = useState<string>("");
 
  const [addPoint, setAddPoint] = useState<number>(500);
  const [point, setPoint] = useState<number>(0);
  //서버에서 불러와야함
  

  return (    
    <InputCont>
      <InputPhoneNumber
        phoneNum1 = {phoneNum1}
        phoneNum2={phoneNum2}
        phoneNum3 = {phoneNum3}
        setPhoneNum1={setphoneNum1}
        setPhoneNum2={setphoneNum2}
        setPhoneNum3={setphoneNum3}
        setClientPoint={setPoint}
      />
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
      <InputBox>
        <StyledText
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            color: theme.colors.pointfontcolor,
          }}
        >적립 포인트</StyledText>
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
      <InputBox style={{
        justifyContent: "center",        
      }}>
        <StyledText
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            color: theme.colors.greenfontcolor,
          }}
        >적립후 포인트</StyledText>
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
        >{(addPoint + point).toString()+ "P"}</StyledText>
      </InputBox>
      <StyledButton
        // onClick={() => setPoint(addPoint + point)}
        // 서버작업 필요
      >적립하기</StyledButton>
    </InputCont>
  );
}

export default AccumulatePoint;