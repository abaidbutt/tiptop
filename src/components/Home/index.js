import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Section from "./Section";
import Section2 from "./Section2";
import { ResponsiveImage } from "../ResponsiveImage";
import Fifth from "../parts/Fifth";
import Third from "../parts/Third";
import Footer from "../Footer";

function Home() {
  const [m1, setm1] = useState();
  const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="xxl"
        disableGutters
        component="main"
        sx={{ height: "450px", width: "100%" }}
      >
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ResponsiveImage
              src={`/assets/img/use_platform.png`}
              alt={"platform"}
            />
          </Grid>
          <Grid item md={6}>
            <Section />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" component="main">
        <Fifth />
      </Container>
      <Container maxWidth="xl" component="main">
        <Third />
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
