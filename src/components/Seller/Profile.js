import { Close, Edit } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Stack,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
const languages = [
  { id: 1, name: "English" },
  { id: 2, name: "Spanish" },
  { id: 5, name: "Portuguese" },
  { id: 6, name: "Russian" },
  { id: 3, name: "French" },
  { id: 4, name: "Chineese" },
  // Add more languages as needed
];
const speciality = [
  { id: 1, name: "Broker" },
  { id: 2, name: "Buyer's agent" },
  { id: 5, name: "Seller's agent" },
  { id: 6, name: "Dual agent" },
  { id: 3, name: "Relocation" },
  { id: 4, name: "Consulting" },
  // Add more languages as needed
];

const SellerProfile = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedLanguages((prevSelectedLanguages) => [
        ...prevSelectedLanguages,
        value,
      ]);
    } else {
      setSelectedLanguages((prevSelectedLanguages) =>
        prevSelectedLanguages.filter((language) => language !== value)
      );
    }
  };

  const handleSubmit = () => {
    console.log(selectedLanguages);
    // Perform any additional actions with the selected languages
  };
  const handleUploadPhoto = () => {
    // Handle the logic for uploading a photo
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Stack spacing={4} direction="row" alignItems="center">
            <div style={{ position: "relative", display: "inline-block" }}>
              <Avatar
                alt="SellerProfile Picture"
                src="/assets/icons/profile1.png"
                sx={{ width: 100, height: 100, backgroundColor: "#909090" }}
              >
                Edit Photo <Edit />
              </Avatar>
              <IconButton
                variant="contained"
                onClick={handleUploadPhoto}
                style={{
                  position: "absolute",
                  bottom: 1,
                  right: 1,
                  border: "1px solid #000",
                  p: 0,
                  background: "#fff",
                }}
                size="small"
              >
                <Close />
              </IconButton>
            </div>
            <Stack spacing={1}>
              <Typography fontWeight="bold" variant="subtitle1">
                Seller name
              </Typography>
              <Stack direction="row" alignItems={"flex-end"}>
                Acc #<TextField variant="standard" />
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid item md={6} sm={12}>
          <Typography>First Name</Typography>
          <TextField variant="standard" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Last Name</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Mobile phone Number</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Preferred language</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography> Organization (optional)</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Location</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography> New Password </Typography>
          <TextField type="password" variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Retype password</Typography>
          <TextField type="password" variant="standard" label="" fullWidth />
        </Grid>

        <Grid item sm={12}>
          <Stack spacing={1} alignItems="center" sx={{ my: 2 }}>
            <Button variant="contained" sx={{ px: 15 }}>
              Save
            </Button>
            <Button>Reset</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SellerProfile;
