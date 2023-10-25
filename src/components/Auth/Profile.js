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
import { useNavigate } from "react-router-dom";
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

const Profile = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const navigate = useNavigate();

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
      <Stack spacing={1} alignItems="center" sx={{ my: 2 }}>
        <Typography variant="h6">Complete your professional profile</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Start posting your listings for free
        </Typography>
        <Typography variant="subtitle2" color="text.error">
          It will take only 1-2 minutes of your time!
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Stack spacing={4} direction="row" alignItems="center">
            <div style={{ position: "relative", display: "inline-block" }}>
              <Avatar
                alt="Profile Picture"
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
                Agent’s full name
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
          <Typography>Work phone number (optional)</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography> Realtor/broker license number</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Location</Typography>
          <TextField variant="standard" label="" fullWidth />
        </Grid>

        <Grid item md={6} sm={12}>
          <Typography>Specialty</Typography>

          <FormGroup>
            <Grid container>
              {speciality.map((language) => (
                <Grid item md={6} sm={12}>
                  <FormControlLabel
                    key={language.id}
                    control={
                      <Checkbox
                        checked={selectedLanguages.includes(language.name)}
                        onChange={handleLanguageChange}
                        value={language.name}
                      />
                    }
                    label={language.name}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>Language</Typography>
          <FormGroup>
            <Grid container>
              {languages.map((language) => (
                <Grid item md={6} sm={12}>
                  <FormControlLabel
                    key={language.id}
                    control={
                      <Checkbox
                        checked={selectedLanguages.includes(language.name)}
                        onChange={handleLanguageChange}
                        value={language.name}
                      />
                    }
                    label={language.name}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography>About me</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={5}
              label=""
              fullWidth
              InputProps={{ sx: { borderRadius: 4 } }}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography>Work experience</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              label=""
              fullWidth
              InputProps={{ sx: { borderRadius: 4 } }}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography>Education</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              label=""
              fullWidth
              InputProps={{ sx: { borderRadius: 4 } }}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography>Certification</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              label=""
              fullWidth
              InputProps={{ sx: { borderRadius: 4 } }}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography>Interests and hobbies</Typography>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              label=""
              fullWidth
              InputProps={{ sx: { borderRadius: 4 } }}
            />
          </Grid>
          <Grid item sm={12}>
            <Stack spacing={1} alignItems="center" sx={{ my: 2 }}>
              <Button variant="contained" sx={{ px: 15 }}>
                Submit
              </Button>
              <Button>Edit profile</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Profile;
