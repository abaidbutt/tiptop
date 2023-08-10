import React, { useContext } from "react";
import { TextField, Stack, Button, Divider } from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { ButtonComponent } from "../Auth";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <Stack spacing={1}>
        <TextField type="email" variant="standard" label="Email" fullWidth />

        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            navigate("/auth/verify");
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
        />
        <ButtonComponent
          text="Continue with Facebook"
          icon={<Facebook sx={{ color: "#1674EA" }} fontSize="large" />}
        />
      </Stack>
    </div>
  );
};

export default Signup;
