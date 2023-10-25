import { Button, Container, Stack, Typography, Link } from "@mui/material";
import React from "react";
import { CustomAvatar } from "../CustomAvatar";

const agents = [
  {
    name: "Annent name",
    city: "Annent name",
    state: "Annent name",
    src: "/assets/icons/profile_icon2.png",
  },
  {
    name: "Annent name",
    city: "Annent name",
    state: "Annent name",
    src: "/assets/icons/profile_icon.jpg",
  },
  {
    name: "Annent name",
    city: "Annent name",
    state: "Annent name",
    src: "/assets/icons/profile_icon2.png",
  },
  {
    name: "Annent name",
    city: "Annent name",
    state: "Annent name",
    src: "/assets/icons/profile_icon1.png",
  },
];
const FindAgents = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={1} sx={{ my: 6 }}>
        <Stack
          spacing={1}
          direction="row"
          alignItems="flex-end"
          justifyContent="center"
        >
          <CustomAvatar variant="square" src="/assets/icons/list2A.png" />
          <Typography variant="h5" fontWeight="bold">
            Real Estate Agents
          </Typography>
        </Stack>
        <Typography variant="subtitle1" align="center">
          We offer variety of services for TipTop exclusive clients
        </Typography>
      </Stack>
      <Container maxWidth="sm">
        {agents.map((item, index) => (
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            my={2}
          >
            <Stack direction="row" spacing={6} alignItems={"center"}>
              <CustomAvatar
                src={item.src}
                variant="square"
                sx={{ width: 80, height: 80 }}
              />
              <Stack justifyContent={"center"}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle1">City, state</Typography>
                <Link color="inherit">View Profile</Link>
              </Stack>
            </Stack>
            <Button variant="contained" sx={{ px: 5 }}>
              Select Now
            </Button>
          </Stack>
        ))}
      </Container>
    </Container>
  );
};

export default FindAgents;
