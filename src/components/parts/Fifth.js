import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
  Stack,
} from "@mui/material";

import React from "react";
import { Star } from "@mui/icons-material";

let items = [
  {
    text: "Exclusive access",
    src: <Star color="primary" />,
  },
  {
    text: "Advanced technology",
    src: <Star color="primary" />,
  },
  {
    text: "Fast transactions",
    src: <Star color="primary" />,
  },
];
let item1 = {
  text1: `Buying or selling your home? \n Do it the smart way on TipTop`,
  text2:
    "  TipTop gives you the power to buy and sell real estate in the\nMiami area and surroundings from anywhere in the world. Use\n dollars or crypto for faster transfers and at your convenience.\n All transactions are registered and verified on blockchain.",
  src: "animation_1",
};
let item2 = {
  text1:
    "Less headaches. Less errors. Simplified, efficient closing process",
  text2:
    "Is the closing process one of your biggest \n nightmares? It can be tiring and time \n consuming. Get help with the tap of a \n button. Technology makes buying and \n selling real estate better than ever before.",
  src: "animation2",
};
const Fifth = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="lg">
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Grid container spacing={2} alignItems="center">
          {items?.map((item) => (
            <Post key={item.text} text={item.text} src={item.src} />
          ))}
        </Grid>
      </Container>

      <ContentComponent
        video={item1.src}
        text1={item1.text1}
        text2={item1.text2}
      />
      <ContentComponent
        video={item2.src}
        text1={item2.text1}
        text2={item2.text2}
        reverse={true}
      />
    </Container>
  );
};
export default Fifth;
function Post({ text, src }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Stack direction={"row"} alignItems="center" spacing={2}>
        {src}
        <Typography variant="h6">{text}</Typography>
      </Stack>
    </Grid>
  );
}
function ContentComponent({ video, text1, text2, reverse }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Grid
          container
          spacing={2}
          flexWrap="wrap"
          direction={reverse ? "row-reverse" : "row"}
          sx={{ alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ px: 5 }}>
            <video
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "auto" }}
            >
              <source src={`/assets/${video}.mp4`} type="video/mp4" />
            </video>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Stack spacing={2} sx={{ maxWidth: { md: 350 } }}>
              <Typography
                variant="h5"
                gutterBottom
                fontWeight="bolder"
                sx={{
                  whiteSpace: "pre-line",
                  overflowWrap: "break-word",
                  fontSize: "1.75rem",
                }}
              >
                {text1.trim()}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: "1.15rem" }}>
                {text2}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
