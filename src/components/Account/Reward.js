import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  CardMedia,
  Link,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import React from "react";
import { CustomAvatar } from "../CustomAvatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BorderColorOutlined } from "@mui/icons-material";
import { CustomTableCell } from "../CustomAvatar";
const Reward = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={1} sx={{ my: 6 }}>
        <Stack
          spacing={1}
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Typography variant="h5" fontWeight="bold">
            Reward Center
          </Typography>
          <CustomAvatar variant="square" src="/assets/icons/rewards_icon.png" />
        </Stack>
        <Typography variant="subtitle1" align="center">
          Enjoy special bonus and rewards with TipTop
        </Typography>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell>Reward type</CustomTableCell>
              <CustomTableCell align="center">Amount</CustomTableCell>
              <CustomTableCell align="center">Status</CustomTableCell>
              <CustomTableCell align="center">Issue Date</CustomTableCell>
              <CustomTableCell align="center">Redeem Date</CustomTableCell>
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
                  <Typography
                    variant="body1"
                    noWrap
                    sx={{
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                    }}
                  >
                    New client sign-up cash bonus.{" "}
                    <Link
                      color="inherit"
                      onClick={handleClickOpen}
                      sx={{ cursor: "pointer" }}
                    >
                      Terms apply
                    </Link>
                  </Typography>
                </TableCell>
                <TableCell align="center">$00.00</TableCell>
                <TableCell align="center">
                  <Typography
                    sx={{ borderBottom: index % 2 == 0 && "4px solid aqua" }}
                  >
                    {index % 2 == 0 ? "Active" : "Not Active"}
                  </Typography>
                </TableCell>
                <TableCell align="center">04/05/2023</TableCell>
                <TableCell align="center">04/05/2023</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SimpleDialog open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Reward;
function SimpleDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          border: "2px solid aqua",
          borderRadius: 8,
          p: 4,
          background: "#F2F2F2",
        },
      }}
    >
      {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          The amount of sign-up bonus is based on the final sale price of the
          property. The bonus might be adjustable during negotiations between
          buyer and seller. Subject to change without any notice
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
/**
   * 
   * 
  
   */
