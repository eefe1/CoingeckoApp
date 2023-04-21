import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import CoinDetail from "./CoinDetail";
import styled from "styled-components";

const CircleImage = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 15px;
  font-size: 0.6rem;
  background-color: #f0f0f0;
  color: #0091FF;
  border-radius:2px;
`;

function CoinsTable({ coins }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ color: "#AEB1BF" }}>Coin Name</TableCell>
            <TableCell></TableCell>
            <TableCell align="right" sx={{ color: "#AEB1BF" }}>
              Coin Price
            </TableCell>
            <TableCell align="right" sx={{ color: "#AEB1BF" }}>
              24%
            </TableCell>
            <TableCell align="right" sx={{ color: "#AEB1BF" }}>
              24h High
            </TableCell>
            <TableCell align="right" sx={{ color: "#AEB1BF" }}>
              24h Low
            </TableCell>
            <TableCell align="right" sx={{ color: "#AEB1BF" }}>
              More
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell>
                <CircleImage src={coin.image} alt={coin.name} />
              </TableCell>
              <TableCell align="left">{coin.name}</TableCell>
              <TableCell align="inherit">
                <Box>{coin.symbol.toUpperCase()}</Box>
              </TableCell>
              <TableCell align="right">${coin.current_price}</TableCell>
              <TableCell align="right" sx={{color:'#34D399'}}>
              {coin.price_change_percentage_24h}%
              </TableCell>
              <TableCell align="right">${coin.high_24h}</TableCell>
              <TableCell align="right">${coin.low_24h}</TableCell>
              <TableCell align="right" onClick={handleClickOpen}>
                ...
              </TableCell>
              <CoinDetail open={open} onClose={handleClose} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CoinsTable;
