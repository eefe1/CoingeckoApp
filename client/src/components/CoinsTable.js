import React, { useState } from "react";
import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Pagination,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const CircleImage = styled.img`
  border-radius: 50%;
  width: 20px;
  padding-right: 15px;
  height: 20px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 15px;
  font-size: 0.6rem;
  background-color: #f0f0f0;
  color: #0091ff;
  border-radius: 2px;
`;

function CoinsTable({ coins }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/coins/${id}`);
  };
  const handleSearch = () => {
    if (!coins) return;
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <Container>
      <TableContainer>
        <TextField
          size="small"
          label="Search"
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {[
                "Coin Name",
                "",
                "Coin Price",
                "24%",
                "24h High",
                "24h Low",
                "",
              ].map((head) => (
                <TableCell
                  sx={{ color: "#AEB1BF", pl: 5 }}
                  key={head}
                  align={head === "Coin" ? "" : "left"}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch() &&
              handleSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <>
                      <TableRow key={row.name} />
                      <TableCell>
                        <CircleImage src={row?.image} alt={row?.name} />
                        {row?.name}
                      </TableCell>
                      <TableCell align="inherit">
                        <Box>{row?.symbol.toUpperCase()}</Box>
                      </TableCell>
                      <TableCell align="right">${row?.current_price.toLocaleString()}</TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                          fontWeight: 500,
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right">${row?.high_24h.toLocaleString()}</TableCell>
                      <TableCell align="right">${row?.low_24h.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleRowClick(row.id)}>
                          ...
                        </Button>
                      </TableCell>
                    </>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={(handleSearch()?.length / 10).toFixed(0)}
        style={{
          paddingTop: 40,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />
    </Container>
  );
}
export default CoinsTable;
