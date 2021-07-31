import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
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

const GetNameComp: FC = () => {
  const [clientName, setClientName] = useState<string>('default');
  return (
    <Main>
      <Name>{clientName}</Name>
    </Main>
  );
}

export default GetNameComp;