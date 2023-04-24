import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';


const Div = styled.div`
  background-color: #f0f1f5;
  height: 100%;

`;

const Header = styled.header`
  background-color: #ffffff;
  display: flex;
  padding: 20px 40px;
  font-size: 1.2em;
  font-weight: bold;
  color: #03A66D;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  cursor:grab;
`;

const MainBox = styled(Box)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  height: 100%;

`;

const Main = styled(Box)`
  display: flex;
  height: 100%;
  border-radius: 8px;
  padding: 60px;
  background-color: #ffffff;
`;

function Layout({ children }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <>
    <Div>
      <Header>
        <Typography onClick={handleClick}> Gecko</Typography>
      </Header>
      <MainBox>
        <Main>{children}</Main>
      </MainBox>
    </Div>
    </>
  );
}

export default Layout;
