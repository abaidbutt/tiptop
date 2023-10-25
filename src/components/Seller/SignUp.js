import React from "react";
import {
  TextField,
  Button,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const SellerSignup = () => {
  const navigate = useNavigate();

  const handleClickOpen = () => {
    navigate("/seller/details");
  };

  return (
    <div>
      <Stack spacing={1}>
        <TextField variant="standard" label="First Name" fullWidth />
        <TextField variant="standard" label="Lirst Name" fullWidth />
        <TextField variant="standard" label="Phone Number" fullWidth />

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
          label="I am the owner of the property I want to sell. "
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
      </Stack>
    </div>
  );
};

export default SellerSignup;
