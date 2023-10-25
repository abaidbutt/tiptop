import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Stack,
  IconButton,
  CardActions,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
const MoreDetails = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [checkboxValues, setCheckboxValues] = useState({
    self: false,
    estateagent: false,
  });
  const handleCheckboxChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSubmit = () => {
    dispatch({ type: "SIGNIN", payload: true });
    navigate(state.role === "buyer" ? "/profile" : "/seller/profile");
  };

  return (
    <div>
      <Box
        sx={{
          py: { md: 15, sm: 5 },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Welcome to TipTop
          </Typography>
          <Typography variant="h6">
            What do you want to do estateagentw?
          </Typography>
          <CardContent>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxValues.self}
                    onChange={handleCheckboxChange}
                    name="self"
                  />
                }
                label="Sell your home yourself"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxValues.estateagent}
                    onChange={handleCheckboxChange}
                    name="estateagent"
                  />
                }
                label="Get a real estate agent"
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={handleSubmit} sx={{ px: 5 }}>
              Continue
            </Button>
          </CardActions>
        </Stack>
      </Box>
    </div>
  );
};

export default MoreDetails;
