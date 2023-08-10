import React from "react";
import { Container, Typography, Grid, Avatar, Stack } from "@mui/material";
import { styled } from "@mui/material";
let items = [
  {
    text: "Money",
    src: "/assets/icons/money2A.jpg",
  },
  {
    text: "Crypto",
    src: "/assets/icons/bitcoin2A.jpg",
  },
  {
    text: "NFTs",
    src: "/assets/icons/nft3A.jpg",
  },
];

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
}));
const Second = () => {
  return (
    <>
      <Container maxWidth="md" sx={{ px: 4, py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Efficient closings on blockchain
        </Typography>

        <Grid container spacing={2} alignItems="center" sx={{ py: 6 }}>
          {items?.map((item) => (
            <Post key={item.text} text={item.text} src={item.src} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Second;
function Post({ text, src }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Stack direction={"row"} alignItems="center" justifyContent={"center"} spacing={2}>
        <CustomAvatar
          variant="square"
          src={src}
          alt={text}
          sx={{ width: 60, height: 60 }}
        />
        <Typography variant="h6" fontWeight="bold">
          {text}
        </Typography>
      </Stack>
    </Grid>
  );
}
