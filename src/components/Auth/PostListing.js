import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  TextField,
  MenuItem,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";

const PostListing = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Post a listing on TipTop for FREE!
        </Typography>
        <Box>
          <Typography>Select property type</Typography>
          <TextField variant="standard" fullWidth select>
            <MenuItem value="Home">Home</MenuItem>
            <MenuItem value="Office">Office</MenuItem>
            <MenuItem value="Building">Building</MenuItem>
            <MenuItem value="Commercial">Commercial</MenuItem>
            <MenuItem value="Goverment">Goverment</MenuItem>
            <MenuItem value="Lease">Lease</MenuItem>
          </TextField>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={8} sm={10}>
            <Typography>Street address</Typography>
            <TextField variant="standard" fullWidth />
          </Grid>
          <Grid item md={4} sm={2}>
            <Typography>Unit #</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography>City</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography>State</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography> Zip code</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={6} sm={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Automatically adjust address"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Show address on the map"
            />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography>Building area (sq. ft.)</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Bedrooms</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Bathrooms</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography>Lot size (acre)</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Built in</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Garage</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography>Property features</Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography> Price (USD)</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography> Price (crypto)</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <Typography> Headline</Typography>
            <TextField
              variant="standard"
              label=""
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography> Overview</Typography>
            <TextField
              variant="standard"
              label=""
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography> Special features</Typography>
            <TextField
              variant="standard"
              label=""
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          startIcon={
            <img src="/assets/sell_agent/id_card.jpg" width="25" height="25" />
          }
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
          disableElevation
          disableFocusRipple
          disableRipple
          disableTouchRipple
        >
          Government issued ID card
        </Button>
        <Button
          fullWidth
          startIcon={
            <img
              src="/assets/sell_agent/driver_license.jpg"
              width="25"
              height="25"
            />
          }
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
        >
          Driver’s License
        </Button>
        <Button
          startIcon={
            <img src="/assets/sell_agent/passport.jpg" width="25" height="25" />
          }
          fullWidth
          sx={{
            justifyContent: "flex-start",
            "&:hover": { borderBottom: "1px solid", borderRadius: 0 },
          }}
        >
          Passport
        </Button>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ px: 10, my: 2 }}>
            Continue
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default PostListing;
