import React, { useContext } from "react";
import {
  Container,
  TextField,
  Button,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store";
const Auth = () => {
  const navigate = useNavigate();
  const { state } = useContext(Context);
  return (
    <Container maxWidth="xs" sx={{ px: { md: 10, sm: 5 }, py: 5 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Enter a 4-digit code
        <br /> sent to your email
      </Typography>

      <Stack spacing={1} direction={"row"}>
        <TextField
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
        <TextField
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
        <TextField
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
        <TextField
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
      </Stack>
      <Stack sx={{ mt: 1 }}>
        <Button>I didn’t receive a code</Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            navigate(
              state.role === "buyer"
                ? "/auth/signup/detail"
                : "/auth/seller/signup/detail"
            )
          }
        >
          Continue
        </Button>
        <Button>back</Button>
      </Stack>
    </Container>
  );
};

export default Auth;
