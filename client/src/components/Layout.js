import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';


const Div = styled.div`
  background-color: #f0f1f5;
`;
const Logo = styled.text`
  font-family: 'Product Sans', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: #34D399;
  text-shadow: none;
`;
const Header = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px;
  font-size: 1.2em;
  font-weight: bold;
  color: #03A66D;
  margin: 0.5em 0;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  padding-bottom: 0.5em;
  cursor:grab;
`;

const MainBox = styled(Box)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const Main = styled(Box)`
  display: flex;
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
