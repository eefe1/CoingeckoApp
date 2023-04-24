import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Grid, Divider, Typography,Table,TableRow, TableHead,TableCell } from "@mui/material";
import styled from "styled-components";
import DOMPurify from "dompurify";

const CoinDetails = () => {
  const { id } = useParams();

  const [coinDetails, setCoinDetails] = useState({});
  useEffect(() => {
    const fetchCoinDetails = async () => {
      const response = await axios.get(`/coins/${id}`);
      setCoinDetails(response.data);
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
      font-size: 0.7em;
      `;
  }
  const DetailBox = styled.div`
    ${truncate("400px")}
  `;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box gap={2} sx={{ display: "flex", mb: 5 }}>
              {coinDetails.image ? (
                <img src={coinDetails.image.small} alt="" />
              ) : null}{" "}
              <Typography variant="h3">{coinDetails?.name}</Typography>
            </Box>
            <Box>
              <DetailBox
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coinDetails?.description ? coinDetails?.description.en : ""
                  ),
                }}
              ></DetailBox>
            </Box>
          </Grid>
          <Divider orientation="vertical" />
          <Grid item xs={4}>
            <Box sx={{ mt: 5, pl: 20 }}>
              {coinDetails.market_data?.current_price ? (
                <Typography>
                  Current price : $
                  {coinDetails.market_data.current_price.usd.toLocaleString()}
                </Typography>
              ) : null}

        
              {coinDetails.market_data?.low_24h ? (
                  <p>Low Price 24 Hour: ${coinDetails.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              {coinDetails.market_data?.high_24h ? (
                <p>High Price 24 Hour: ${coinDetails.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
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
                <tbody>
                  <tr>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_60d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_200d_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>

                    <td>
                      {coinDetails.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <p>
                          {coinDetails.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                            1
                          )}
                          %
                        </p>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CoinDetails;
