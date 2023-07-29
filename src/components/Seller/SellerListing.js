import React, { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import {
  rooms,
  appliances,
  basement,
  flooring,
  indoorFeatures,
  indoorAmenities,
  architecture,
  exterior,
  outdooramenities,
  roof,
  view,
  parking,
  cooling,
  heating,
  heatingFuel,
} from "../../rooms";
import { CustomAvatar } from "../CustomAvatar";

const SellerListing = () => {
  const [selection, setSelection] = useState({
    rooms: [],
    appliances: [],
    basement: [],
    flooring: [],
    room: [],
    indoorFeatures: [],

    indoorAmenities: [],
    architecture: [],
    exterior: [],
    outdooramenities: [],
    roof: [],
    view: [],
    parking: [],

    heating: [],
    heatingFuel: [],
    cooling: [],
  });

  const handleChange = (event) => {
    const { value, checked } = event.target;

    setSelection((prevState) => ({
      ...prevState,
      [event.target.name]: checked
        ? [...prevState[event.target.name], value]
        : prevState[event.target.name].filter((item) => item !== value),
    }));
  };
  return (
    <Container maxWidth="md">
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
          <Grid item md={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Automatically adjust address"
            />
          </Grid>
          <Grid item md={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Show address on the map"
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <Typography>map view</Typography>
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
            <Typography>Year of structural remodel</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Year built</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={6}>
            <Typography> Lot size</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography> HOA monthly dues</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={8} sm={12}>
            <Typography> Parking spaces</Typography>
            <TextField variant="standard" label="" fullWidth />
          </Grid>
          <Grid item md={12} sm={12}>
            <Typography>Property features</Typography>
            <FormGroup>
              <Grid container>
                {rooms.map((item) => (
                  <Grid item md={4} sm={12}>
                    <FormControlLabel
                      key={item.id}
                      control={
                        <Checkbox
                          checked={selection.rooms.includes(item.name)}
                          onChange={handleChange}
                          value={item.name}
                          name="rooms"
                        />
                      }
                      label={item.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
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
            <Typography> Describe your property</Typography>
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
          <Grid item sm={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Available for real time video tour"
            />
          </Grid>
          <Grid item sm={12}>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Schedule open house "
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography>Date</Typography>
            <TextField type="date" variant="standard" fullWidth />
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography>Star</Typography>
            <TextField type="date" variant="standard" fullWidth />
          </Grid>
          <Grid item md={3} sm={6}>
            <Typography>Date</Typography>
            <TextField type="date" variant="standard" fullWidth />
          </Grid>
          <Grid item sm={12}>
            <Typography> Virtual tour link</Typography>
            <TextField
              variant="standard"
              label=""
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography> Add a cover photo</Typography>
            <FileUploadBox />
          </Grid>
          <Grid item sm={12}>
            <Typography> Add photos</Typography>
            <FileUploadBox />
          </Grid>
          <Grid item sm={12}>
            <Typography> Additional details</Typography>
            <FileUploadBox />
          </Grid>
          <Grid item sm={12}>
            <Accordion
              sx={{
                transition: "all 0.5s ease 0s",
                my: 1,
                "&:before": {
                  display: "none",
                },
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore color="primary" />}>
                <Typography>Rooms</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography>Appliances</Typography>
                  <FormGroup>
                    <Grid container>
                      {appliances.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.appliances.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="appliances"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Basement</Typography>
                  <FormGroup>
                    <Grid container>
                      {basement.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.basement.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="basement"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Flooring</Typography>
                  <FormGroup>
                    <Grid container>
                      {flooring.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.flooring.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="flooring"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Rooms</Typography>
                  <FormGroup>
                    <Grid container>
                      {rooms.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.rooms.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="room"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Indoor Features</Typography>
                  <FormGroup>
                    <Grid container>
                      {indoorFeatures.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.indoorFeatures.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="indoorFeatures"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                transition: "all 0.5s ease 0s",
                my: 1,
                "&:before": {
                  display: "none",
                },
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Buildings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography>Indoor Amenities</Typography>
                  <FormGroup>
                    <Grid container>
                      {indoorAmenities.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.indoorAmenities.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="indoorAmenities"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Architecture</Typography>
                  <FormGroup>
                    <Grid container>
                      {architecture.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.architecture.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="architecture"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Exterior</Typography>
                  <FormGroup>
                    <Grid container>
                      {exterior.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.exterior.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="exterior"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Outdoor amenities</Typography>
                  <FormGroup>
                    <Grid container>
                      {outdooramenities.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.outdooramenities.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="outdooramenities"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Roof</Typography>
                  <FormGroup>
                    <Grid container>
                      {roof.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.roof.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="roof"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>View</Typography>
                  <FormGroup>
                    <Grid container>
                      {view.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.view.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="view"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Parking</Typography>
                  <FormGroup>
                    <Grid container>
                      {parking.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.parking.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="parking"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                transition: "all 0.5s ease 0s",
                my: 1,
                "&:before": {
                  display: "none",
                },
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Utilities</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography>Cooling type</Typography>
                  <FormGroup>
                    <Grid container>
                      {cooling.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.cooling.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="cooling"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Heating System</Typography>
                  <FormGroup>
                    <Grid container>
                      {heating.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.heating.includes(item.name)}
                                onChange={handleChange}
                                value={item.name}
                                name="heating"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
                <Box>
                  <Typography>Heating Fuel</Typography>
                  <FormGroup>
                    <Grid container>
                      {heatingFuel.map((item) => (
                        <Grid item md={4} sm={12}>
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                checked={selection.heatingFuel.includes(
                                  item.name
                                )}
                                onChange={handleChange}
                                value={item.name}
                                name="heatingFuel"
                              />
                            }
                            label={item.name}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormGroup>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ px: 10, my: 2 }}>
            Post your ad
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default SellerListing;
const FileUploadBox = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    // Access the dropped files from the event
    const files = event.dataTransfer.files;
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const name = file.name;
      const formatType = file.type;
      fileArray.push({ name, formatType });
    }
    setFiles(fileArray);
    // Process the dropped files as needed
  };

  return (
    <Box
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        pointer: "cursor",
      }}
    >
      <CustomAvatar src="/assets/icons/draft2.jpg" variant="square" />
      {files.length ? (
        files?.map((item) => (
          <Typography
            variant="body2"
            sx={{
              background: "#F9F9F9",
              borderColor: isDragOver ? "primary.main" : "grey.500",
              borderRadius: "4px",
              padding: "1rem",
              textAlign: "center",
              px: 2,
            }}
            component={"span"}
          >
            {item?.name}
          </Typography>
        ))
      ) : (
        <Typography
          variant="body2"
          sx={{
            background: "#F9F9F9",
            borderColor: isDragOver ? "primary.main" : "grey.500",
            borderRadius: "4px",
            padding: "1rem",
            textAlign: "center",
            // p: 2,
          }}
          component={"span"}
        >
          Drag and drop files here or Browse Media
        </Typography>
      )}
    </Box>
  );
};
