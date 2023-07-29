import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import React from "react";
import { CustomAvatar } from "../CustomAvatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { EditNote } from "@mui/icons-material";
import { CustomTableCell } from "../CustomAvatar";
const Listings = () => {
  return (
    <Container maxWidth="md">
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 3 }}
      >
        <CustomAvatar variant="square" src="/assets/icons/listings.png" />
        <Typography variant="h5" fontWeight="bold">
          My Listing
        </Typography>
      </Stack>
      <Typography variant="subtitle1" align="center">
        Number of properties: 2
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Property Details</CustomTableCell>
              <CustomTableCell align="center">USD Price</CustomTableCell>
              <CustomTableCell align="center">BTC Price</CustomTableCell>
              <CustomTableCell align="center">Discount</CustomTableCell>
              <CustomTableCell align="center">Status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 3 }, () => "Hello").map((row, index) => (
              <TableRow
                key={row}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  <Stack alignItems="center" justifyContent={"center"}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={"https://source.unsplash.com/random"}
                      alt={"Random"}
                      sx={{ maxWidth: 180 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ width: { md: "50%" }, px: 4, py: 1 }}
                      align="center"
                    >
                      13900 Harrison St, Miami, FL 33176
                    </Typography>
                    <Box>
                      <Button startIcon={<EditNote />}>Edit</Button>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell align="center">$650,000</TableCell>
                <TableCell align="center">
                  <Typography component="span" sx={{ borderBottom: "4px solid aqua" }}>
                    21.42
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography color="primary">$50,000</Typography>
                </TableCell>
                <TableCell align="center" color="primary">
                  {index % 2 === 0 ? "Active" : "In Draft"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Listings;
