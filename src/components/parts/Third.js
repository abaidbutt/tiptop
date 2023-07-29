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
    img: "/assets/icons/profile1.png",
    name: "Profile",
    description:
      "Exclusive access to the hottest \n deals on DeFi real estate market",
  },
  {
    img: "/assets/icons/privacy1.png",
    name: "Privacy",
    description: "Select privacy protection when \n buying or selling property",
  },
  {
    img: "/assets/icons/scale2.png",
    name: "Scale",
    description:
      "Smart way to balance the \n security of traditional real estate \n with flexibility of Bitcoin",
  },
];
const mobileworks = [
  {
    img: "/assets/icons/circle2_best.png",
    name: "Easy",
    description:
      "Easier international and overseas \n real estate transactions.",
  },
  {
    img: "/assets/icons/contract1.png",

    name: "Contract 1",
    description:
      "Simplified and efficient closing \n process via smart contracts.",
  },
  {
    img: "/assets/icons/all_in_one.png",
    name: "All in One",
    description: "All-in-one platform to buy and \nsell properties. ",
  },
];

const Third = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="lg">
      <Container maxWidth="sm" sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ my: 4 }}>
          Why use TipTop platform?
        </Typography>
      </Container>
      <ContentComponent works={works} img={"use_platform"} />
      <ContentComponent works={mobileworks} reverse={true} img="design4" />
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
      sx={{ alignItems: "center", mb: 12 }}
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
        <ResponsiveImage src={`/assets/img/${img}.png`} alt={img} />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Stack justifyContent={"center"} spacing={4}>
          {works?.map((item, index) => (
            <Stack alignItems={"center"} spacing={1}>
              <CustomAvatar
                src={item.img}
                alt={item.name}
                variant="square"
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="h6"
                sx={{
                  whiteSpace: "pre-line",
                  overflowWrap: "break-word",
                  fontFamily: "Uber Move Medium",
                }}
              >
                {item.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
export default Third;
