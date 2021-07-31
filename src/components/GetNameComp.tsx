import { Dispatch, FC, ReactElement, SetStateAction } from 'react';

import React from 'react';
import styled from 'styled-components';
import { tmpdata } from '../data/data';
import { useState } from 'react';

const Main = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const Name = styled.div`
`;

type Props ={
  phoneNum: string,
  // isClickedOK: boolean,
  // setIsClickedOK: Dispatch<SetStateAction<boolean>>,
  // searchNamebyPhoneNum : (string) => void,
}

const searchNamebyPhoneNum = (phoneNum: string): ReactElement=> {  
  tmpdata.forEach(el => {
    if (el.phonenumber === phoneNum) {
      // alert("ssss");
      // return el.name;
      return (
        <Name>
          "!@#!@#"
        </Name>
      );      
    }
  });
  return (
    <Name>NO NAME</Name>
  );
}

const GetNameComp: FC<Props> = ({ phoneNum }) => {
  
  
  const [clientName, setClientName] = useState<string>('default');
  
  return (
    <Main>
      {/* <Name>{clientName}</Name> */}
      {searchNamebyPhoneNum(phoneNum)}
    </Main>
  );
}

export default GetNameComp;