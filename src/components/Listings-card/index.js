import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Stack,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material";
let items = [
  {
    text: "Single-Family Home",
    src: "/assets/house_1.jpg",
    price: "$430,000",
    crypto: "BTC 21.02",
    location: "Cape Coral, FL",
    details: { bed: 4, bath: 2, sqft: "1714", acre: "0.24" },
  },
  {
    text: "Single-Family Home",
    src: "/assets/house_2.jpg",
    price: "$430,000",
    crypto: "ETH 292.68",
    location: "Miami, FL",
    details: { bed: 2, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    text: "NFTs",
    src: "/assets/house_1.jpg",
    price: "$430,000",
    crypto: "BTC 20.39",
    location: "Miami, FL",
    details: { bed: 3, bath: 2, sqft: "1417", acre: "0.25" },
  },
  {
    text: "NFTs",
    src: "/assets/house_2.jpg",
    price: "$430,000",
    crypto: "ETH 292.68",
    location: "Miami, FL",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
];

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
}));
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
}));
const Listings = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          New Listings
        </Typography>
        <Typography variant="body2" paragraph>
          View All 723 New Listings
        </Typography>

        <Grid container spacing={2} alignItems="center">
          {items?.map((item) => (
            <Post key={item.text} item={item} />
          ))}
          {items?.map((item) => <Post key={item.text} item={item} />)?.sort()}
        </Grid>
      </Container>
    </>
  );
};

export default Listings;
function Post({ item }) {
  return (
    <Grid item lg={3} md={4} xs={12} sm={6}>
      <Card>
        <Box sx={{ position: "relative" }}>
          <Chip
            label="New - 1 hour ago"
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 1,
              borderRadius: 1,
              background: "#1551BD",
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "10px",
              fontFamily: "Uber Move",
              height: "16px",
            }}
          />
          <CardMedia
            component="img"
            height="160"
            image={item.src}
            alt={item.text}
            sx={{ cursor: "pointer" }}
          />
          <CustomAvatar
            src="/assets/icons/heart.png"
            alt="Avatar"
            variant="square"
            size="small"
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              zIndex: 1,
              cursor: "pointer",
              width: 24,
              height: 24,
            }}
          />
        </Box>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ height: 12, width: 12, backgroundColor: "aqua" }}></Box>
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
              {item.text}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1 / 2}>
            <Typography variant="subtitle1">{item.price}</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              /
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              sx={{ borderBottom: "2px solid aqua" }}
            >
              {item.crypto}
            </Typography>
          </Stack>
          <Typography gutterBottom variant="subtitle1">
            {item.location} . Sale
          </Typography>
          <Stack direction="row" justifyContent={"space-between"}>
            <BoxComponent text1={item.details.bed} text2={"bed"} />
            <BoxComponent text1={item.details.bath} text2={"bath"} />
            <BoxComponent text1={item.details.sqft} text2={"sqft"} />
            <BoxComponent text1={item.details.acre} text2={"acre lot"} />
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
            size="small"
            color="primary"
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid aqua",
              "&:hover": {
                border: "2px solid aqua",
              },
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            Contact Agent
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
function BoxComponent({ text1, text2 }) {
  return (
    <CustomBox>
      <Typography variant="body1"> {text1}</Typography>
      <Typography variant="body2">{text2}</Typography>
    </CustomBox>
  );
}
