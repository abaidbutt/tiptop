import React from "react";
import {
  Stack,
  Button,
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
        className="background-video-container"
      >
        {/* <div > */}
        <video autoPlay muted loop className="background-video">
          <source src="/assets/buy/cover_page.mp4" type="video/mp4" />
        </video>

        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
            fontWeight="bold"
          >
            Discover endless possibilities
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Buy your home with crypto or dollars on TipTop
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};

export default Hero;
