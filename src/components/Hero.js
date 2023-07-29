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
  const [file, setFile] = React.useState();
  function fetchData() {}
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
          <source src="/assets/cover_page.mp4" type="video/mp4" />
        </video>

        <Container
          maxWidth="sm"
          sx={{ py: { md: 20, sm: 12, xs: 5 } }}
          disableGutters
        >
          <Typography
            // component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            fontWeight="bold"
          >
            Welcome to everything is possible
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Buy or sell real estate with crypto or dollars
          </Typography>
          <Stack
            sx={{ pt: 6 }}
            direction="row"
            // spacing={2}
            justifyContent="center"
          >
            <TextField
              placeholder="City or Zip Code"
              fullWidth
              variant="outlined"
              type="file"
              onChange={(e) => setFile(e.target.file)}
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
              color="primary"
            >
              Search
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
