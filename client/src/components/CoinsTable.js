import React from 'react';
//import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CoinsTable({label}) {
return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>Coins</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
          <TableCell >{label}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
}