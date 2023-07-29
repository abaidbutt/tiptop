import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material";
let items = [
  {
    text: "Need a realtor to \nbuy a property?",
    src: "/assets/buy/design_1.png",
    description: `Enjoy exclusive benefits 
      and great service as our 
      new client. Just sign up, 
      select a realtor, and
      search your new home.
      `,
  },
  {
    text: "Got a realtor? Buy a \n property on TipTop ",
    src: "/assets/buy/design_2.jpg",
    description: `We will work with your 
      realtor to make buying 
      real estate process 
      efficient and pleasant 
      for you.`,
  },
  {
    text: "Are you a realtor?\n Post your listings ",
    src: "/assets/buy/design_3.jpg",
    description: `Passionate about real 
      estate? We are looking for 
      the best realtors & brokers 
      to offer the outstanding 
      services to our clients. `,
  },
];

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
}));
const Sixth = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {items?.map((item) => (
          <Post
            key={item.text}
            description={item.description}
            text={item.text}
            src={item.src}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Sixth;
function Post({ text, src, description }) {
  return (
    <Grid item xs={12} sm={4} key={text}>
      <Card
        sx={{
          p: 2,
          height: "100%",
          background: "transparent",
          border: "1px solid #7F7F7F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="160"
            width="40"
            image={src}
            alt={text}
            sx={{ objectFit: "contain" }}
          />
          <Stack spacing={2}>
            <Typography gutterBottom variant="h5" component="div">
              {text}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              border: "2px solid aqua",
              textTransform: "capitalize",
              borderRadius: 2,
            }}
          >
            Get Started
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
