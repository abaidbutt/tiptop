import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
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
    centerPadding: "60px",
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
    <Container maxWidth="md">
      <Typography gutterBottom variant="h4" sx={{ my:2 }}>
        Recently sold
      </Typography>
      <Grid container spacing={2}>
        {cardItems?.map((item) => (
          <MediaCard item={item} key={item?.title} />
        ))}
      </Grid>
      <Grid container spacing={2}>
        {cardItems
          ?.map((item) => <MediaCard item={item} key={item?.title} />)
          ?.sort()}
      </Grid>
    </Container>
  );
}
function MediaCard({ item, ...props }) {
  return (
    <Grid
      {...props}
      sx={{
        background: "transparent",
        cursor: "pointer",
      }}
      item
      lg={3}
      md={6}
      xs={12}
    >
      <CardMedia
        component="img"
        height="160"
        width="40"
        image={item.src}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h6" align="center" fontWeight={"bold"}>
          {item?.title}
        </Typography>
      </CardContent>
    </Grid>
  );
}
const cardItems = [
  {
    src: "/assets/house_2.jpg",
    title: "Chris Pickering",
    description:
      "We Started working with them in 2011 and they have become a vital part of our digital marketing plan. Whether it is improving SEO ranking, social media, or press release, the team is full of ideas and also has the capabilities to implement them. Despite having no expperience of snow or skiing, they have immersed themselves in our product.",
  },
  {
    src: "/assets/house_1.jpg",
    title: "Courtney T.",
    description:
      "Working with Summit Crew we were able to target our exact audience in their exact location and it's been amazing.",
  },
  {
    src: "/assets/house_2.jpg",
    title: "I.W.",
    description:
      "They have helped us grow our online presence in our target market.",
  },
  {
    src: "/assets/house_1.jpg",
    title: "Andrea M.",
    description:
      "They have exceeded our expectations time and time again. Our only regret is that we hadn't found them sooner.",
  },
];
