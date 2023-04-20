const axios = require('axios');
const express = require('express');
const app = express();

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

async function getCoins() {
    try {
      const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  module.exports = {
    getCoins,
  };

  async function getCoinById(id) {
    try {
      const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  module.exports = {
    getCoins,
    getCoinById,
  };
