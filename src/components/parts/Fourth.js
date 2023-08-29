import { Container, Typography, Avatar } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import React from "react";

import { styled } from "@mui/material";
const CustomAvatar = styled(Avatar)(({ theme }) => ({
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
  width: "auto",
  height: "auto",
}));
const works = [
  {
    img: (
      <CustomAvatar src="/assets/icons/I1.png" variant="square" alt="profile" />
    ),
    name: "Profile",
    description:
      "Sign up with your email or phone \nnumber to create a free account.",
  },
  {
    img: (
      <CustomAvatar src="/assets/icons/I2.png" variant="square" alt="privacy" />
    ),
    name: "Privacy",
    description:
      "Select one of the next options: buy, \nsell as an owner or sell as an agent. \nFind more useful info on each page.",
  },
  {
    img: (
      <CustomAvatar src="/assets/icons/I3.png" variant="square" alt="scale" />
    ),
    name: "Scale",
    description:
      "Complete identity verification to buy \ncrypto or activate crypto transactions. ",
  },
  {
    img: (
      <CustomAvatar src="/assets/icons/I4.png" variant="square" alt="scale" />
    ),
    name: "Scale",
    description:
      "To buy new home: search property by \n city or zip code. Contact the seller or  \nagent for inquiries or to make an offer.",
  },
  {
    img: (
      <CustomAvatar src="/assets/icons/I5.png" variant="square" alt="upload" />
    ),
    name: "upload",
    description:
      "To sell property as an Owner: fill out \n info, upload images, select price in \n dollars or crypto, post your listing for free.",
  },
  {
    img: (
      <CustomAvatar
        src="/assets/icons/I6.png"
        variant="square"
        alt="keyboard"
      />
    ),
    name: "keyboard",
    description:
      "To sell property as an Agent: fill out your \n professional profile, submit info for \napproval. Select price in dollars or crypto \nfor your listings. Post for free.",
  },
  {
    img: (
      <CustomAvatar
        src="/assets/icons/I7.png"
        variant="square"
        alt="Open Account 1"
      />
    ),
    name: "Open Account",
    description:
      "Use escrow account on TipTop for faster \n and secure transactions to close the deal. ",
  },
  {
    img: (
      <CustomAvatar src="/assets/icons/I8.png" variant="square" alt="Smart" />
    ),
    name: "Smart",
    description:
      "Use dollars or crypto to buy or sell your\nhome. The transaction will be recorded \nat the local county and on blockchain.",
  },
];

const Fourth = () => {
  return (
    <Container sx={{ py: { md: 5, xs: 3 } }} maxWidth="lg">
      <Container maxWidth="sm" sx={{ my: 5, textAlign: "center" }}>
        <Typography variant="h4" sx={{ my: 4 }}>
          How does it work
        </Typography>
      </Container>
      <ContentComponent works={works} img={"use_platform"} />
    </Container>
  );
};
function ContentComponent({ works, reverse, img }) {
  return (
    <Timeline position="alternate">
      {works?.map((item, index) =>
        index % 2 === 0 ? (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ px: 10 }}>{item.img}</TimelineOppositeContent>
            <TimelineSeparator sx={{ mx: { md: 3, sm: 2, xs: 1 } }}>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 10 }}>
              {item.description}
            </TimelineContent>
          </TimelineItem>
        ) : (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ px: 10 }}>
              {item.description}
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ mx: { md: 3, sm: 2, xs: 1 } }}>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 10 }}>{item.img}</TimelineContent>
          </TimelineItem>
        )
      )}
    </Timeline>
  );
}

export default Fourth;
