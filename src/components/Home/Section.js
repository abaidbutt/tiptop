import React, { useState, useEffect, useMemo } from "react";
import {
  Paper,
  TextField,
  Box,
  Grid,
  Container,
  MenuItem,
  InputAdornment,
  Button,
} from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { Search } from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../config";

const Section = () => {
  const navigate = useNavigate();
  const query = useParams();
  const location = useLocation();
  const [msg, setMsg] = useState();
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      subCategory: "",
    },
  });

  const [category, setCategory] = useState();
  const [categories, setCategories] = useState();
  const filterCategory = useMemo(() => {
    if (watch("category"))
      return category?.filter(({ types }) => types === getValues("category"));
  }, [watch("category")]);

  const handleFilter = async (data) => {
    try {
      console.log(data);
      let values = {};
      data.title && (values.title = data.title);
      data.category && (values.category = data.category);
      data.subCategory && (values.subCategory = data.subCategory);
      if (location.pathname == "/") {
        console.log("hi frome here");

        navigate(`/search/?${values}`);
      } else {
        navigate(`/discover/?${values}`);
      }
    } catch (err) {
      setMsg({
        open: true,
        type: "err",
        txt: "Invalid Credentials",
      });
    }
  };
  return (
    <Paper sx={{ my: 2 }}>
      <BasicTabs>
        <form onSubmit={handleSubmit(handleFilter)}>
          <Grid container spacing={1} alignItems="center" sx={{ p: 2 }}>
            <Grid item xs={12}>
              <Controller
                name="title"
                control={control}
                // rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    label="Search Location | Area"
                    // autoComplete="search"
                    error={!!errors?.title}
                    sx={{
                      "& .MuiFilledInput-root": {
                        background: "#fff",
                      },
                      border: "2px solid #EDE8E9",
                    }}
                    autoFocus
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="category"
                control={control}
                // rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    select
                    label="Property Type "
                    error={!!errors?.category}
                    sx={{
                      "& .MuiFilledInput-root": {
                        background: "#fff",
                      },
                      border: "2px solid #EDE8E9",
                      borderRadius: "8px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  >
                    <MenuItem value={"events"}>House</MenuItem>
                    <MenuItem value={"bdining"}>Apartments</MenuItem>
                    <MenuItem value={"bshop"}>Commercial</MenuItem>
                    <MenuItem value={"bentertainment"}>Vacant Land</MenuItem>
                    <MenuItem value={"bservices"}>Ware House</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="subCategory"
                control={control}
                // rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    select
                    label="Space|Rooms"
                    error={!!errors?.subCategory}
                    className={{
                      "& .MuiFilledInput-root": {
                        background: "#fff",
                      },
                      border: "2px solid #EDE8E9",
                      borderRadius: "8px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  >
                    <MenuItem value={"events"}>1</MenuItem>
                    <MenuItem value={"bdining"}>2</MenuItem>
                    <MenuItem value={"bshop"}>4</MenuItem>
                    <MenuItem value={"bentertainment"}>5</MenuItem>
                    <MenuItem value={"bservices"}>10</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                startIcon={<Search />}
                color="primary"
                variant="contained"
                size="large"
                sx={{ p: 3 / 2, borderRadius: 6, my:2 }}
                fullWidth
              >
                Search{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </BasicTabs>
    </Paper>
  );
};

export default Section;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ children }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="For Sale" {...a11yProps(0)} />
          <Tab label="For Rent" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {children}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {children}
      </CustomTabPanel>
    </Box>
  );
}
