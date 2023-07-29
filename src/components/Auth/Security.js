import { Button, Container, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { ResponsiveImage } from "../ResponsiveImage";

const Security = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Post a listing on TipTop for FREE!
        </Typography>
        <Box sx={{ width: 150, height: 150, textAlign: "center" }}>
          <ResponsiveImage
            src="/assets/sell_agent/icon13B.jpg"
            alt="Security Privacy "
          />
        </Box>
        <Typography variant="subtitle1">
          Your account is currently not verified.
        </Typography>
        <Typography variant="subtitle1">
          Complete a quick verification to access services.
        </Typography>
        <Box>
          <Button variant="contained" sx={{ px: 10, my: 2 }}>
            Start now
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Security;
