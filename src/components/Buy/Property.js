import { Container, Typography, Grid, Stack } from "@mui/material";
import { ResponsiveImage } from "../ResponsiveImage";
import React from "react";

const works = {
  name: "Buying property with crypto? \n TipTop is here to make it happen",
  description: [
    `If you are a strong believer in Bitcoin or Ethereum, 
      buying property with crypto could be the right 
      option for you.`,
    `Transforming your property valuation to a whole 
      new dimension could protect you from inflation, 
      dollar collapse, real estate market crash, and 
      world economic crisis.`,
    `Also, this option could offer enhance your capital 
    gains in the long term.
    `,
  ],
};

const mobileworks = {
  name: "Buying property with dollars? \n Find out what TipTop has to offer",
  description: [
    `If you prefer to buy your new home 
    traditionally and are looking for a special 
    deal, you are in the right place!
    `,
    `Combining real estate with technology 
    and innovation, we are ready to take your 
    experience to a whole new level.`,
    `Our new clients enjoy multiple benefits, such 
    as a cash bonus for signing up or referring 
    friends and relatives who want to buy or sell 
    property, title registration and blockchain 
    transactions.`,
  ],
};

const Property = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="md">
      <Container maxWidth="sm" sx={{ my: 5, textAlign: "center" }}></Container>
      <ContentComponent works={works} img={"design_5"} />
      <ContentComponent works={mobileworks} reverse={true} img="design_7" />
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
        <Typography
          variant="h5"
          sx={{
            my: 4,

            fontWeight: 700,
            whiteSpace: "pre-line",
            overflowWrap: "break-word",
          }}
        >
          {works.name}
        </Typography>
        <Stack
          justifyContent={"center"}
          sx={{ maxWidth: { md: 380 } }}
          spacing={1}
        >
          {works?.description?.map((item, index) => (
            <Stack alignItems={"center"} spacing={1} key={index}>
              <Typography variant="subtitle1">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
export default Property;
