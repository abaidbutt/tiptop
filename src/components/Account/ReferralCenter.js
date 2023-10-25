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

const Listings = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 3 }}
      >
        <CustomAvatar variant="square" src="/assets/icons/icon5.jpg" />
        <Typography variant="h5" fontWeight="bold">
          Referral Center
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Typography variant="subtitle1">
          Refer a friend. You both will get a $1,000 cash bonus
        </Typography>
        <Link>Terms Apply</Link>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">
                Referral ID Number
              </CustomTableCell>
              <CustomTableCell align="center">Cash Bonus</CustomTableCell>
              <CustomTableCell align="center">Status</CustomTableCell>
              <CustomTableCell align="center">Issue Date</CustomTableCell>
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
                <TableCell component="th" scope="row" align="center">
                  17111104
                </TableCell>
                <TableCell align="center">$00.00</TableCell>
                <TableCell align="center" color="primary">
                  {index % 2 == 0 ? "Active" : "Not Active"}
                </TableCell>
                <TableCell align="center">04/05/2023</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container maxWidth="sm">
        <Stack spacing={1} alignItems="center">
          <Typography variant="h6" align="center" fontWeight="bold">
            Invite now
          </Typography>

          <Typography variant="body1" align="center">
            Have friends or relatives who want to buy or sell a property? Use
            your unique link to invite them by text message or email.
          </Typography>
          <Stack>
            <Typography variant="body2" align="center" color="text.secondary">
              Default Referral ID
            </Typography>
            <Typography variant="body1" align="center">
              17111106
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" align="center" color="text.secondary">
                Default Link
              </Typography>
              <Typography variant="body1" align="center">
                https://www.bin...17111106
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" align="center" color="text.secondary">
                Note -
              </Typography>
              <BorderColorOutlined />
            </Stack>
          </Stack>
          <Box>
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{ px: 10 }}
            >
              Invite now
            </Button>
          </Box>
        </Stack>
        <SimpleDialog open={open} handleClose={handleClose} />
      </Container>

      <TableContainer sx={{ my: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">
                Referral ID Number
              </CustomTableCell>
              <CustomTableCell align="center">Cash Bonus</CustomTableCell>
              <CustomTableCell align="center">Status</CustomTableCell>
              <CustomTableCell align="center">Activation Date</CustomTableCell>
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
                <TableCell component="th" scope="row" align="center">
                  17111104
                </TableCell>
                <TableCell align="center">$1,000</TableCell>
                <TableCell align="center" color="primary">
                  {index % 2 == 0 ? "Active" : "In Draft"}
                </TableCell>
                <TableCell align="center">04/05/2023</TableCell>
                <TableCell align="center" color="primary">
                  04/20/00
                </TableCell>
                <TableCell align="center" color="primary">
                  00/00/00
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
          All TipTop clients and partners must qualify to receive the referral
          cash bonus. The referral program is for new clients only. As soon as
          your friend or relative uses the referral link and creates a new
          account, your bonus will become active. It is valid for six months
          from the date of issue. After closing the deal and all funds
          distributed, you and your referral, both will receive the cash bonus
          in their TipTop wallets. You can convert it to dollars or
          cryptocurrency and withdraw at any time.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
/**
 * 
 * 

 */
