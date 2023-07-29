import {
  Box,
  Container,
  CardContent,
  Typography,
  CardMedia,
  Card,
  Stack,
  CardActions,
  Button,
  Paper,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { styled } from "@mui/material";
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
}));
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        color: "black",
        "&:hover": {
          color: "aqua",
        },
      }}
      onClick={onClick}
    >
      <ArrowForwardIos />
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        color: "black",
        "&:hover": {
          color: "aqua",
        },
      }}
      onClick={onClick}
    >
      <ArrowBackIos />
    </Box>
  );
}
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerPadding: "100px",
    className: "slide",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h4">
        Recently Sold
      </Typography>
      <Slider {...settings}>
        {cardItems?.map((item) => (
          <MediaCard item={item} key={item?.title} />
        ))}
      </Slider>
      <Slider {...settings}>
        {cardItems
          ?.map((item) => <MediaCard item={item} key={item?.title} />)
          ?.sort()}
      </Slider>
    </Container>
  );
}

function MediaCard({ item, ...props }) {
  return (
    <CardContent {...props}>
      <Paper sx={{ background: "#fff", elevation: 1, cursor: "pointer" }}>
        <CardMedia
          component="img"
          height="140"
          width="40"
          image={item.src}
          alt={item.title}
        />
        <Box sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ height: 12, width: 12, backgroundColor: "aqua" }}></Box>
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
              Single-Family Home
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1 / 2}>
            <Typography variant="subtitle1">$430,000</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              /
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              sx={{ borderBottom: "2px solid aqua" }}
            >
              ETH 292.68
            </Typography>
          </Stack>
          <Typography gutterBottom variant="subtitle1">
            Miami, FL . Sale
          </Typography>
          <Stack direction="row" justifyContent={"space-between"}>
            <BoxComponent text1={item.details.bed} text2={"bed"} />
            <BoxComponent text1={item.details.bath} text2={"bath"} />
            <BoxComponent text1={item.details.sqft} text2={"sqft"} />
            <BoxComponent text1={item.details.acre} text2={"acre lot"} />
          </Stack>
        </Box>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined">Contact Agent</Button>
        </CardActions>
      </Paper>
    </CardContent>
  );
}
const cardItems = [
  {
    src: "https://source.unsplash.com/random",
    title: "Chris Pickering",
    description:
      "We Started working with them in 2011 and they have become a vital part of our digital marketing plan. Whether it is improving SEO ranking, social media, or press release, the team is full of ideas and also has the capabilities to implement them. Despite having no expperience of snow or skiing, they have immersed themselves in our product.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "Courtney T.",
    description:
      "Working with Summit Crew we were able to target our exact audience in their exact location and it's been amazing.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "I.W.",
    description:
      "They have helped us grow our online presence in our target market.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "Andrea M.",
    description:
      "They have exceeded our expectations time and time again. Our only regret is that we hadn't found them sooner.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "Courtney T.",
    description:
      "Working with Summit Crew we were able to target our exact audience in their exact location and it's been amazing.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "I.W.",
    description:
      "They have helped us grow our online presence in our target market.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
  {
    src: "https://source.unsplash.com/random",
    title: "Andrea M.",
    description:
      "They have exceeded our expectations time and time again. Our only regret is that we hadn't found them sooner.",
    details: { bed: 3, bath: 1, sqft: "1014", acre: "0.32" },
  },
];
function BoxComponent({ text1, text2 }) {
  return (
    <CustomBox>
      <Typography variant="body1"> {text1}</Typography>
      <Typography variant="body2">{text2}</Typography>
    </CustomBox>
  );
}
