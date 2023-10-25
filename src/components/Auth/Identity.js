import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import React from "react";

const Identity = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Identity verification
        </Typography>
        <Box>
          <Typography>Country of issue</Typography>
          <TextField variant="standard" fullWidth select>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UAE">UAE</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Singapur">Singapur</MenuItem>
          </TextField>
        </Box>
        <Typography variant="subtitle1" fontWeight="bold">
          Use a valid government-issued document
        </Typography>
        <Typography variant="subtitle1">
          Only the following documents listed below will be accepted. All other
          documents will be rejected.
        </Typography>

        <Button
          fullWidth
          startIcon={
            <img src="/assets/sell_agent/id_card.jpg" width="25" height="25" />
          }
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
        >
          Government issued ID card
        </Button>
        <Button
          fullWidth
          startIcon={
            <img
              src="/assets/sell_agent/driver_license.jpg"
              width="25"
              height="25"
            />
          }
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
        >
          Driver’s License
        </Button>
        <Button
          startIcon={
            <img src="/assets/sell_agent/passport.jpg" width="25" height="25" />
          }
          fullWidth
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
        >
          Passport
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ px: 10, my: 2 }}>
            Continue
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Identity;
