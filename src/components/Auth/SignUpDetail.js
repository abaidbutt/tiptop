import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Close } from "@mui/icons-material";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";

const SignupDetail = () => {
  const [auth, setauth] = React.useState("signin");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newauth) => {
    setauth(newauth);
  };

  return (
    <div>
      <Stack spacing={1}>
        <TextField variant="standard" label="First Name" fullWidth />
        <TextField variant="standard" label="Lirst Name" fullWidth />
        <TextField variant="standard" label="Phone Number" fullWidth />
        <TextField
          variant="standard"
          label="Realtor/broker license number"
          fullWidth
        />

        <TextField
          type="password"
          variant="standard"
          label="Create password"
          fullWidth
        />
        <TextField
          type="password"
          variant="standard"
          label="Re-enter password"
          fullWidth
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="I’m a licensed realtor or broker professional"
          sx={{ textAlign: "left", fontSize: "12px" }}
        />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="I have read and agree with TipTop Terms of Use  and Privacy Policy"
          sx={{
            textAlign: "left",
            fontSize: "12px",
            alignItems: "flex-start",
          }}
        />

        <Button variant="contained" fullWidth onClick={handleClickOpen}>
          Create Account
        </Button>
        <AlertDialog open={open} handleClose={handleClose} />
      </Stack>
    </div>
  );
};

export default SignupDetail;

export function AlertDialog({ open, handleClose }) {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [checkboxValues, setCheckboxValues] = useState({
    yes: false,
    no: false,
  });
  const handleCheckboxChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit = () => {
    dispatch({ type: "SIGNIN", payload: true });
    navigate(state.role === "buyer" ? "/profile" : "/seller/profile");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            border: "2px solid aqua",
            borderRadius: 8,
            p: 4,
          },
        }}
      >
        <Stack alignItems={"flex-end"} onClick={handleClose}>
          <IconButton>
            <Close />
          </IconButton>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            Thank you for signing up.
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you have any questions, we can schedule a quick call.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.yes}
                  onChange={handleCheckboxChange}
                  name="yes"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxValues.no}
                  onChange={handleCheckboxChange}
                  name="no"
                />
              }
              label="No"
            />
          </DialogActions>
          <Button variant="outlined" onClick={handleSubmit}>
            Continue
          </Button>
        </Stack>
      </Dialog>
    </div>
  );
}
