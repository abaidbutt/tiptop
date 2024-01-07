import React, { useState, useEffect } from "react";

import {
  IconButton,
  Typography,
  Box,
  Avatar,
  Grid,
  Button,
  Skeleton,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { Axios } from "../../config";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Fastfood, favorite, favoriteBorder } from "@mui/icons-material";

const category = [
  {
    name: "Tommy's Burger Place",
    link: "https://source.unsplash.com/random",
    tag: "Food, Dining, Takeout",
  },
  {
    name: "Tommy's Burger Place",
    link: "https://source.unsplash.com/random",
    tag: "Food, Dining, Takeout",
  },
  {
    name: "Tommy's Burger Place",
    link: "https://source.unsplash.com/random",
    tag: "Food, Dining, Takeout",
  },
];
const Section2 = () => {
  const [categories, setCategories] = useState();

  const handler = async () => {
    const response = await Axios.post("/bdining/all", { limit: 0 });
    let res = response.data;
    res = res?.data?.data?.filter(({ imgUrls }) => imgUrls?.length);

    setCategories(res);
  };

  return (
    <>
      <Box sx={{ my: "5rem" }}>
        <Typography
          variant="h5"
          align="left"
          color="text.primary"
          gutterBottom
          sx={{ marginTop: 5, marginBottom: 5, fontWeight: "800" }}
        >
          Popular in your Areas
        </Typography>
        <Grid container spacing={3} align="center">
          {!categories
            ? Array.from(new Array(3)).map((item, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Paper>
                    <Box
                      sx={{
                        gap: "10px",
                        display: "flex",
                        padding: "10px",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Skeleton
                          variant="rectangular"
                          sx={{ height: "277px", width: "100%" }}
                        />
                      </Box>
                      <Box sx={{ flex: 1, textAlign: "left" }}>
                        <Skeleton width="90%" />
                        <Skeleton width="60%" />
                        <Skeleton width="80%" />
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default Section2;
