import GetNameComp from './GetNameComp';
import InputPhoneNumber from './InputPhoneNumber';
import React from 'react';
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


const AccumulatePoint = () => {
  return (    
    <InputCont>
      <InputPhoneNumber />
      <GetNameComp />
      <InputBox>
        <StyledText
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            color: theme.colors.pointfontcolor,
          }}
        >적립 포인트</StyledText>
        <StyledInput value={500} type="number" style={{ width: "60%" }} />
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
        >4000 P</StyledText>
      </InputBox>
      
    </InputCont>
  );
}

export default AccumulatePoint;