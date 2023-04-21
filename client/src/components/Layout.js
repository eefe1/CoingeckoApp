import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

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
  color: #f0f1f5;
`;
const MainBox = styled(Box)`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const Main = styled(Box)`
  display: flex;
  border-radius: 8px;
  padding: 20px 40px;
  width: 1000px;
  background-color: #ffffff;
  color: #f0f1f5;
`;

function Layout({ children }) {
  return (
    <Div>
      <Header>
        <Logo>Gecko</Logo>{" "}
      </Header>
      <MainBox>
        <Main>{children}</Main>
      </MainBox>
    </Div>
  );
}

export default Layout;
