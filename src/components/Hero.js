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
    <Container disableGutters>
      <Box
        sx={{
          // pt: 8,
          pb: { md: 6 },
          position: "relative",
          width: "100%",
          height: { md: "100vh" },
          overflow: "hidden",
        }}
      >
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src="/assets/cover_page.mp4" type="video/mp4" />
          </video>

          <div>
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
                sx={{ pt: 6, m: { xs: 2, sm:5 } }}
                direction="row"
                // spacing={2}
                justifyContent="center"
              >
                <TextField
                  placeholder="City or Zip Code"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setFile(e.target.value)}
                  InputLabelProps={{
                    // style: { color: '#43DCFF' }
                    style: { color: "#000" },
                  }}
                  size="medium"
                  sx={{
                    border: "none",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 2,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        border: "1px solid #595959",
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "#000",
                      background: "#F2F2F2",
                      borderRadius: 2,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      border: "1px solid #595959",
                    },
                    // border: '1px solid #fff',
                    // '&:hover': {
                    //   border: '1px solid #43DCFF'
                    // },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    // borderTopLeftRadius: 0,
                    // borderBottomLeftRadius: 0,
                    zIndex: 1,
                    ml: -2,
                    py: 5 / 2.1,
                    mt: -1 / 2,
                    px: 3,
                  }}
                  size="large"
                  color="primary"
                >
                  Search
                </Button>
              </Stack>
            </Container>
          </div>
        </div>

        {/* <ReactPlayer
          url="/assets/cover-paged.mp4" // Replace with the correct video URL
          playing // Autoplay the video
          muted // Mute the video
          loop // Loop the video
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "100%",
            zIndex: 0,
            objectFit: "cover",
            display: "block",
            border: "none",
            outline: "none",
            margin: 0,
            padding: 0,
            background: "none",
          }}
        /> */}
        {/* <video
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
            zIndex: 0,
            objectFit: "cover",
          }}
        >
          <source src="/assets/cover-paged.mp4" type="video/mp4" />
        </video> */}
      </Box>
    </Container>
  );
};

export default Hero;
