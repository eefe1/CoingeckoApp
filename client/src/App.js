import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Coins from "./components/Coins";
import Layout from "./components/Layout";
import CoinPage from "./components/CoinPage";

function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Coins />} exact/>
          <Route path="/coins/:id" element={<CoinPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
