import { Button, Container, Stack, Typography } from "@mui/material";
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

import { useNavigate } from "react-router-dom";
import { CustomTableCell } from "../CustomAvatar";

const Reward = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

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
          <CustomAvatar variant="square" src="/assets/icons/list2A.png" />
          <Typography variant="h5" fontWeight="bold">
            Service Center
          </Typography>
        </Stack>
        <Typography variant="subtitle1" align="center">
          We offer variety of services for TipTop exclusive clients
        </Typography>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell>Type Of Service</CustomTableCell>
              <CustomTableCell align="center">Service Fee</CustomTableCell>
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
                  <Typography
                    variant="body1"
                    noWrap
                    sx={{
                      whiteSpace: "pre-line",
                      overflowWrap: "break-word",
                    }}
                  >
                    Real estate agent.{"\n"}
                    Photo/ videographer{"\n"}
                    Market value analysis{"\n"}
                    Home appraisal{"\n"}
                    Escrow account{"\n"}
                    Title search{"\n"}
                  </Typography>
                </TableCell>
                <TableCell align="center">FREE for new clients</TableCell>
                <TableCell align="center" color="primary">
                  <Stack spacing={1}>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/findagent")}
                    >
                      Find Now
                    </Button>
                    <Button variant="contained">Book Now</Button>
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
