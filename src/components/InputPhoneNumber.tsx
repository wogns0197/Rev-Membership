import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

const Main = styled.div`
  width:100%;
  height: 100px;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  border: 1px solid ${({theme})=>theme.colors.lightindigo};
`;

const StyledInput = styled.input`
  border: none;
  margin: 0 5px 0 5px;
  width: 60px;
  height: 30px;
  text-align: center;
  font-weight: lighter;
  font-size: 14pt;

  :focus{
    outline-style: none;
  }
  ::-webkit-outer-spin-button, ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin:0;
  }
`;

const InputPhoneNumber: FC = () => {
  return (
    <Main>
      <InputBox>
        <StyledInput type="number" style={{ width: "40px" }} value="010" />
        -
        <StyledInput  maxLength={4}/>
        -
        <StyledInput  maxLength={4}/>
      </InputBox>
    </Main>    
  );
}

export default InputPhoneNumber;