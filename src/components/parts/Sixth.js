import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Stack,
} from "@mui/material";

let items = [
  {
    text: "Sell home",
    src: "/assets/img/sell_home.jpg",
    description:
      "Find out how you \n can sell your home \n for Bitcoin, stable \n coin or Ethereum,\nand benefit from it",
  },
  {
    text: "Buy home",
    src: "/assets/img/buy_home.jpg",
    description:
      "Find out how you \n can buy your home \n using Bitcoin, stable \ncoin or Ethereum,\n and benefit from it",
  },
  {
    text: "Mortgage",
    src: "/assets/img/get_mortgage.jpg",
    description:
      "Learn how you can \n get a home loan to \n buy your new home \n with crypto, and \n benefit from it",
  },
];

const Sixth = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Take the first step
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Select your goal and we'll guide you on your journey
        </Typography>
      </Container>

      <Grid container spacing={2} sx={{ my: 4 }}>
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
          borderRadius: 8,
          height: "100%",
          background: "transparent",
          border: "1px solid #7F7F7F",
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <CardMedia
              component="img"
              height="220"
              width="140"
              image={src}
              alt={text}
              sx={{ objectFit: "contain" }}
            />
            <Typography
              gutterBottom
              variant="h5"
              sx={{ color: "#000", fontWeight: "normal", px: 2 }}
            >
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
            sx={{
              border: "2px solid aqua",
              color: "#000",
              borderRadius: 2,
            }}
            size="large"
          >
            {text}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
// import { Grid, Card, CardContent } from "@mui/material";

// const cardData = [
//   { title: "Card 1", content: "Content for Card 1" },
//   { title: "Card 2", content: "Content for Card 2" },
//   { title: "Card 3", content: "Content for Card 3" },
// ];

// function App() {
//   return (
//     <Grid container spacing={2}>
//       {cardData.map((card, index) => (
//         <Grid item xs={12} sm={4} key={index}>
//           <Card sx={{ height: "100%" }}>
//             <CardContent>
//               <h2>{card.title}</h2>
//               <p>{card.content}</p>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default App;
