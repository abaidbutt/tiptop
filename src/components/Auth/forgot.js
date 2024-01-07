import React, { useContext } from "react";
import { TextField, Stack, Button, Divider } from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { ButtonComponent } from "../Auth";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
const SellerForgot = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <Stack spacing={1}>
        <TextField type="email" variant="standard" label="Email" fullWidth />
      </Stack>
      <Stack sx={{ my: 4 / 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            dispatch({ type: "SIGNIN", payload: "Agent" });
            navigate("/auth/signin");
          }}
          color="primary"
        >
          Forgot Password
        </Button>
      </Stack>
      <Stack sx={{ px: 8 }}>
        <Button onClick={() => navigate("/auth/signin")}>Get Started</Button>
      </Stack>
    </div>
  );
};

export default SellerForgot;
