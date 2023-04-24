import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  TableBody,
  Table,
  TableRow,
  TableHead,
  TableCell,
  CircularProgress,
} from "@mui/material";
import styled from "styled-components";
import DOMPurify from "dompurify";

const CoinDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [coinDetails, setCoinDetails] = useState({});

  useEffect(() => {
    const fetchCoinDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(`/coins/${id}`);
      setCoinDetails(response.data);
      setIsLoading(false);

      console.log(coinDetails);
    };

    fetchCoinDetails();
  }, []);

  function truncate(height) {
    return `
    height: ${height};
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      `;
  }
  const CoinDetailBox = styled(Typography)`
    ${truncate("400px")}
  `;
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box gap={3} sx={{ display: "flex", mb: 5, alignItems: "center" }}>
              {coinDetails.image ? (
                <img src={coinDetails.image.small} alt={coinDetails?.name} />
              ) : null}
              <Typography variant="h3">{coinDetails?.name}</Typography>
              {coinDetails.market_data?.current_price ? (
                <Typography variant="h5">
                  ${coinDetails.market_data.current_price.usd.toLocaleString()}
                </Typography>
              ) : null}
            </Box>
            <Box>
              <CoinDetailBox
                variant="body2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coinDetails?.description ? coinDetails?.description.en : ""
                  ),
                }}
              ></CoinDetailBox>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ pt: 10, pl: 10 }}>
              {coinDetails.market_data?.low_24h ? (
                <Typography>
                  Low Price 24h: $
                  {coinDetails.market_data.low_24h.usd.toLocaleString()}
                </Typography>
              ) : null}
              {coinDetails.market_data?.high_24h ? (
                <Typography>
                  High Price 24h: $
                  {coinDetails.market_data.high_24h.usd.toLocaleString()}
                </Typography>
              ) : null}
              <Box sx={{ mt: 8 }}>
                <Typography variant='body1'>Price change:</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>24h</TableCell>
                      <TableCell>7d</TableCell>
                      <TableCell>14d</TableCell>
                      <TableCell>30d</TableCell>
                      <TableCell>60d</TableCell>
                      <TableCell>200d</TableCell>
                      <TableCell>1yr</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%
                          </p>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_60d_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </TableCell>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <TableCell>
                          {coinDetails.market_data.price_change_percentage_200d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </TableCell>
                      ) : null}
                      <TableCell>
                        {coinDetails.market_data
                          ?.price_change_percentage_24h_in_currency ? (
                          <p>
                            {coinDetails.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                              1
                            )}
                            %
                          </p>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CoinDetails;
