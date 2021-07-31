import { Dispatch, FC, SetStateAction } from 'react';

import GetNameComp from './GetNameComp';
import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import { useState } from 'react';

const Main = styled.div`
  width:100%;
  height: 100px;  
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


type Props = {
  phoneNum1: string,
  phoneNum2: string,
  phoneNum3: string,
  setPhoneNum1: Dispatch<SetStateAction<string>>,
  setPhoneNum2: Dispatch<SetStateAction<string>>,
  setPhoneNum3: Dispatch<SetStateAction<string>>,
  onClickPhoneButton : () => void,
}

const InputPhoneNumber: FC<Props> = ({
  phoneNum1,phoneNum2,phoneNum3,setPhoneNum1, setPhoneNum2, setPhoneNum3,onClickPhoneButton
}) => {
  
  
  const [HTMLELEMENT_REF3, setREF3] = useState<HTMLInputElement>();
  const [HTMLELEMENT_BUTTONREF, setButtonREF] = useState<HTMLDivElement>();

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
                // if (e.target.value.length === 4) { HTMLELEMENT_BUTTONREF.click()}
              }}
              value={phoneNum3}
          />
        </InputBox>
        <StyledButton
          ref={(ref) => setButtonREF(ref as any)}
          onClick={() => {
            onClickPhoneButton()
            setPhoneNum1("010")
            setPhoneNum2("")
            setPhoneNum3("")
          }}
        >
          확인
        </StyledButton>
      </InputCont>
      <GetNameComp phoneNum={phoneNum1+phoneNum2+phoneNum3}/>
    </Main>    
  );
}

export default InputPhoneNumber;