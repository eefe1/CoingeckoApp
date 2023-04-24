const axios = require('axios');
const express = require('express');
const app = express();

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

async function getCoins(skip = 0, limit = 100) {
  try {
    const response = await axios.get(`${COINGECKO_API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${skip / limit + 1}&sparkline=false`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
  
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
