import { Container } from "@mui/material";
import React from "react";
import Hero from "./Hero";

import Services from "./Services";
import Choices from "./Choices";
import Crypto from "./Crypto";
import Property from "./Property";
import Recently from "./Recently";
import NewHome from "./NewHome";
import FAQs from "./FAQs";

const Buy = () => {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Hero />
      <Services />
      <Choices />
      <Crypto />
      <Property />
      <Recently />
      <NewHome />
      <FAQs />
    </Container>
  );
};

export default Buy;
