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
    <Box>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "100%",
            zIndex: -1,
            objectFit: "cover", // Adjust the object-fit property
          }}
        >
          <source src="/assets/buy/cover_page.mp4" type="video/mp4" />
        </video>

        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Discover endless possibilities
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Buy your home with crypto or dollars on TipTop
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            // spacing={2}
            justifyContent="center"
          >
            {/* <TextField
              placeholder="City or Zip Code"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                // style: { color: '#43DCFF' }
                style: { color: "#000" },
              }}
              size="medium"
              sx={{
                background: "#fff",

                border: "none",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: 2,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#000",
                },
                // border: '1px solid #fff',
                // '&:hover': {
                //   border: '1px solid #43DCFF'
                // },
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              size="large"
            >
              Search
            </Button> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
