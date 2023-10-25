import { AddBoxOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography, Box, Grid } from "@mui/material";
import React from "react";

const Verification = () => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Personal verification
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              Basic
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dollar and crypto tranactions
            </Typography>
          </Box>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Personl information</Typography>
            <Typography variant="subtitle1">Government issued ID</Typography>
            <Typography variant="subtitle1">Review time: 1-2 days</Typography>
          </Stack>
          <Button variant="contained" sx={{ px: 5 }}>
            {" "}
            Start Now
          </Button>
          <Box
            sx={{
              border: "1px solid #A6A6A6",
              borderRadius: 8,
              my: 4,
              py: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold" align="center">
              Services
            </Typography>
            <Stack spacing={1}>
              <ul>
                <li>Get photographer for FREE</li>
                <li>Post “Home for Sale” ad for FREE</li>
                <li>Select price in dollars or crypto</li>
                <li>Schedule “Open House”</li>
                <li>Offer a “Live video tour”</li>
                <li>Get notifications</li>
                <li>Receive offers from Buyers</li>
                <li>Accept or make a counter-offer</li>
              </ul>
            </Stack>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              Advanced
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crypto tranactions
            </Typography>
          </Box>
          <Stack spacing={1}>
            <Typography variant="subtitle1">Facial recognition</Typography>
            <Typography variant="subtitle1">Proof of address</Typography>
            <Typography variant="subtitle1">Review time: 3 days</Typography>
          </Stack>
          <Button variant="contained" sx={{ px: 5 }}>
            {" "}
            Unavailable
          </Button>
          <Box
            sx={{
              border: "1px solid #A6A6A6",
              borderRadius: 8,
              my: 4,
              py: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold" align="center">
              Services
            </Typography>
            <Stack spacing={1}>
              <ul>
                <li>Proceed with documents</li>
                <li>Accept a good faith deposit</li>
                <li>Accept down payment</li>
                <li>Send and receive messages</li>
                <li>Use bonus towards transaction</li>
                <li>Sign the documents</li>
                <li>Close the deal</li>
                <li>Receive funds or crypto</li>
              </ul>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Verification;
