import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import { ResponsiveImage } from "../ResponsiveImage";
import React from "react";

const works = [
  {
    name: "Blockchain",
    description: "Buy property with dollars on blockchain",
  },
  {
    name: "cryptocurrency 1",
    description: "Buy property with cryptocurrency",
  },
  {
    name: "NFT in One",
    description: "Buy your home as an NFT",
  },
  {
    name: "bonus",
    description: "Receive signup cash bonus*",
  },
  {
    name: "future potential",
    description: "Potential capital gains in the future",
  },
];

const Choices = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="md">
      <ContentComponent works={works} img={"design_4"} />
    </Container>
  );
};
function ContentComponent({ works, reverse, img }) {
  return (
    <Grid
      container
      spacing={2}
      flexWrap="wrap"
      sx={{ alignItems: "flex-start" }}
    >
      <Grid item md={6} sm={12} xs={12}>
        <Stack sx={{ my: 1 }} spacing={2}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Make a smart choice.
            <br /> Your future belongs to you
          </Typography>
          <Typography variant="subtitle1">
            TipTop platform is designed to give you a freedom of choice on how
            you want to buy your home. It's a set of intergraded services and
            tools you can benefit from.
          </Typography>
        </Stack>
        <Stack
          justifyContent={"center"}
          sx={{ maxWidth: { md: 350 } }}
          spacing={1}
        >
          {works?.map((item, index) => (
            <Stack alignItems={"center"} direction="row" spacing={2}>
              <Box
                sx={{
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  background: "aqua",
                }}
              ></Box>
              <Typography variant="subtitle1">{item.description}</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        data-aos="fade-up"
        data-aos-duration={4000 * 1}
        data-aos-easing="linear"
        data-aos-offset="300"
      >
        <ResponsiveImage src={`/assets/buy/${img}.jpg`} alt={img} />
      </Grid>
    </Grid>
  );
}
export default Choices;
