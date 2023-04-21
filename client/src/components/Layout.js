import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

const Header = styled.header`
  background-color: #121318;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px;
  color: #F0F1F5;
`;
const MainBox = styled(Box)`
margin-top:80px;
display: flex;
justify-content: center;
`;

const Main = styled(Box)`
display: flex;
border-radius:8px;
padding: 20px 40px ;
width:1000px;
background-color: #121318;
color: #F0F1F5;
`;

function Layout({ children }) {
  return (
    <>
      <Header>
Gecko      </Header>
<MainBox>
      <Main>
        {children}
      </Main>
      </MainBox>
    </>
  );
}

export default Layout;
