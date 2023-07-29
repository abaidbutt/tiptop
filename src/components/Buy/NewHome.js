import { Container, Typography, Grid, Avatar, Stack } from "@mui/material";
import { ResponsiveImage } from "../ResponsiveImage";
import React from "react";

import { styled } from "@mui/material";
const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
}));
const works = [
  {
    img: (
      <CustomAvatar
        src="/assets/icons/profile1.png"
        variant="square"
        alt="profile"
      />
    ),
    name: "Advanced",
    description: `Select dollars or cryptocurrency you want 
      to purchase your property with.`,
  },
  {
    img: (
      <CustomAvatar
        src="/assets/icons/privacy1.png"
        variant="square"
        alt="privacy"
      />
    ),
    name: "Convenient",
    description: `Buy your home yourself or get our real 
    estate agent to do the job for you.
    `,
  },
  {
    img: (
      <CustomAvatar
        src="/assets/icons/scale2.png"
        variant="square"
        alt="scale"
      />
    ),
    name: "Simplified",
    description: `Faster closing process with built-in 
      escrow accounts and smart contracts.`,
  },
  {
    img: (
      <CustomAvatar
        src="/assets/icons/scale2.png"
        variant="square"
        alt="scale"
      />
    ),
    name: "Secured",
    description: `Your home purchase transaction will be 
      registered and verified on blockchain. `,
  },
];

const NewHome = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="md">
      <Container maxWidth="sm" sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ my: 4, fontWeight: 700 }}>
          Why buy your new home on TipTop
        </Typography>
      </Container>
      <ContentComponent works={works} img={"design_7"} />
    </Container>
  );
};
function ContentComponent({ works, reverse, img }) {
  return (
    <Grid
      container
      spacing={2}
      direction={reverse ? "row-reverse" : "row"}
      flexWrap="wrap"
      sx={{ alignItems: "flex-start" }}
    >
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
      <Grid item md={6} sm={12} xs={12}>
        <Stack
          justifyContent={"center"}
          sx={{ maxWidth: { md: 350 } }}
          spacing={1}
        >
          {works?.map((item, index) => (
            <Stack alignItems={"center"} spacing={1 / 2}>
              {item.img}
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
export default NewHome;
