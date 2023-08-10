import React from "react";
import { Container, Typography, Grid, Avatar, Stack } from "@mui/material";
import { styled } from "@mui/material";
let items = [
  {
    text: `The owner sold the most 
    expensive Miami Beach 
    penthouse for Bitcoin.
    `,
    price: "$22.5 M",
  },
  {
    price: "Over $4 Bn",
    text: `The number of completed 
    real estate transactions 
    made on the blockchain. `,
  },
  {
    text: `The first sale of a Miami condo 
    for cryptocurrency happened at 
    the end of 2017.`,
    price: "17.7 BTC",
  },
];

const Second = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h5"
          align="center"
          paragraph
          fontWeight="bold"
          gutterBottom
          sx={{ py: 2 }}
        >
          Crypto real estate market facts
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          {items?.map((item) => (
            <Post key={item.text} text={item.text} price={item.price} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Second;
function Post({ text, price }) {
  return (
    <Grid item xs={6} sm={4}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h4" color="primary" gutterBottom sx={{ py: 1 }}>
          {price}
        </Typography>
        <Typography variant="subtitle1">{text}</Typography>
      </Stack>
    </Grid>
  );
}
