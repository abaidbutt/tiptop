import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import React from "react";
import { CustomAvatar } from "../CustomAvatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
          <CustomAvatar variant="square" src="/assets/icons/wallet_icon.png" />
          <Typography variant="h5" fontWeight="bold">
            My Wallet
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row" justifyContent="center">
          <Typography variant="subtitle1">Total Balance:</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            $10,000
          </Typography>
        </Stack>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell>Asset type</CustomTableCell>
              <CustomTableCell align="center">Balance</CustomTableCell>
              <CustomTableCell align="center">Available</CustomTableCell>
              <CustomTableCell align="center">BTC Value</CustomTableCell>
              <CustomTableCell align="center">Action</CustomTableCell>
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
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CustomAvatar
                      variant="square"
                      src="/assets/icons/profile_circle.png"
                      sx={{ width: 25, height: 25 }}
                    />

                    <Typography
                      variant="body1"
                      noWrap
                      sx={{
                        whiteSpace: "pre-line",
                        overflowWrap: "break-word",
                      }}
                    >
                      {index % 3 == 0 ? "Cash (USD)" : "BTC"}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">10,000.00</TableCell>
                <TableCell align="center">10,000.00</TableCell>
                <TableCell align="center" color="primary">
                  0.332
                </TableCell>
                <TableCell align="center" sx={{ width: "30%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={1}
                  >
                    <Button color="inherit">Deposit</Button>
                    <Button color="inherit">Convert</Button>
                    <Button color="inherit">Withdraw</Button>
                  </Stack>
                </TableCell>
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
