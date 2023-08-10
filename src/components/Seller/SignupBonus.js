import React, { useContext, useState } from "react";
import {
  TextField,
  Stack,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { ButtonComponent } from "../Auth";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
const SellerSignIn = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <Stack spacing={1}>
        <TextField type="email" variant="standard" label="Email" fullWidth />
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Get your sign-up bonus now! Up to $10,000"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            dispatch({ type: "SIGNIN", payload: "Seller" });
            navigate("/seller/profile");
          }}
        >
          Continue
        </Button>
      </Stack>
      <Stack sx={{ px: 2 }}>
        <Divider>or</Divider>
      </Stack>
      <Stack spacing={1} sx={{ mt: 1 }}>
        <ButtonComponent
          text="Continue with Google"
          icon={<Google sx={{ color: "#E34133" }} fontSize="large" />}
        />
        <ButtonComponent
          text="Continue with Apple"
          icon={<Apple fontSize="large" sx={{ color: "#909090" }} />}
          background="transparent"
        />
        <ButtonComponent
          text="Continue with Facebook"
          icon={<Facebook sx={{ color: "#1674EA" }} fontSize="large" />}
          background="transparent"
        />
      </Stack>
    </div>
  );
};

export default SellerSignIn;
