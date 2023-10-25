import React from "react";
import {
  Typography,
  Container,
  Button,
  Divider,
  Stack,
  Box,
} from "@mui/material";

import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  return (
    <Container maxWidth="xxl" disableGutters component="footer">
      <Container maxWidth="sm" sx={{ py: 8 }}>
        
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" gutterBottom align="center">
            {location.pathname === "/buy"
              ? "Buy your new home on TipTop"
              : "Start your journey today"}
          </Typography>
          <Box>
            <Button
              variant={location.pathname === "/buy" ? "outlined" : "contained"}
              sx={{ px: 10, textTransform: "capitalize" }}
              color="primary"
            >
              Sign up now
            </Button>
          </Box>
        </Stack>
      </Container>
      <Divider />
      <Typography variant="h6" fontWeight="bold" align="center" sx={{ py: 2 }}>
        Footer
      </Typography>
    </Container>
  );
};

export default Footer;
