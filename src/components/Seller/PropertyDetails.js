import {
  Box,
  Container,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import React from "react";

const PropertyDetails = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "ceneter",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" align="center">
          Welcome to TipTop
        </Typography>
        <Typography variant="subtitle1" align="center">
          What do you want to do now?
        </Typography>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
          sx={{ width: { md: 250 } }}
        >
          <Grid container>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Sell your home yourself"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Get a real estate agent"
              />
            </Grid>
          </Grid>
          <Stack>
            <Button variant="contained" sx={{ px: 5 }}>
              Continue
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PropertyDetails;
