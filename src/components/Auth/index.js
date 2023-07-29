import React, { useContext, useEffect } from "react";
import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import { styled } from "@mui/material";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../store";
const StyledToggleButton = styled(ToggleButton)({
  "&.MuiToggleButton-root": {
    "&.Mui-selected": {
      backgroundColor: "transparent",
      borderBottom: "2px solid aqua",
      color: "inherit",
    },
  },
});
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    gap: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      // borderRadius: theme.shape.borderRadius,
      borderRadius: 0,
    },
    // "&:first-of-type": {
    //   borderRadius: 0,
    //   borderRight: "1px solid red",
    // },
    "&:not(:last-of-type)": {
      borderRadius: 0,
      borderRight: "1px solid #595959",
    },
  },
}));
const Auth = () => {
  const location = useLocation();
  const { dispatch, state } = useContext(Context);
  const [auth, setauth] = React.useState("signin");
  const [role, setRole] = React.useState("buyer");
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      dispatch({ type: "AUTH", payload: { role: "buyer", current: "signup" } });
    } else if (location.pathname === "/auth/signin") {
      dispatch({ type: "AUTH", payload: { role: "buyer", current: "signin" } });
    } else if (location.pathname === "/auth/seller/signin") {
      dispatch({
        type: "AUTH",
        payload: { role: "seller", current: "signin" },
      });
    } else if (location.pathname === "/auth/seller/signup") {
      dispatch({
        type: "AUTH",
        payload: { role: "seller", current: "signup" },
      });
    }
  }, [location]);

  const handleChange = (event, newauth) => {
    if (
      newauth === "signin" &&
      (state.role === "buyer" || state.role === "agent")
    ) {
      navigate("/auth/signin");
    } else if (
      newauth === "signup" &&
      (state.role === "buyer" || state.role === "agent")
    ) {
      navigate("/auth/signup");
    } else if (newauth === "signup" && state.role === "seller") {
      navigate("/auth/seller/signup");
    } else if (newauth === "signin" && state.role === "seller") {
      navigate("/auth/seller/signin");
    }
    dispatch({ type: "AUTH", payload: { current: newauth } });
  };
  const handleRole = (event, newrole) => {
    if (
      state.current === "signin" &&
      (newrole === "buyer" || newrole === "agent")
    ) {
      navigate("/auth/signin");
    } else if (
      state.current === "signup" &&
      (newrole === "buyer" || newrole === "agent")
    ) {
      navigate("/auth/signup");
    } else if (state.current === "signup" && newrole === "seller") {
      navigate("/auth/seller/signup");
    } else if (state.current === "signin" && newrole === "seller") {
      navigate("/auth/seller/signin");
    }
    dispatch({ type: "AUTH", payload: { role: newrole } });
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        p: 4,
      }}
    >
      <Container maxWidth="xs" sx={{ textAlign: "center" }}>
        {state.current === "signin" && (
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Welcome to TipTop
          </Typography>
        )}
        <Stack alignItems="center" spacing={1}>
          <StyledToggleButtonGroup
            color="primary"
            value={state.current}
            exclusive
            onChange={handleChange}
            disableElevation
          >
            <StyledToggleButton value="signin">Sign in</StyledToggleButton>
            <StyledToggleButton value="signup">Sign up </StyledToggleButton>
          </StyledToggleButtonGroup>
        </Stack>
        {state.current === "signup" && location.pathname !== "/auth/verify" && (
          <Stack alignItems="center" spacing={1}>
            <StyledToggleButtonGroup
              color="primary"
              value={state.role}
              exclusive
              onChange={handleRole}
              aria-label="Platform"
            >
              <StyledToggleButton value="buyer">Buyer</StyledToggleButton>
              <StyledToggleButton value="seller">Seller </StyledToggleButton>
              <StyledToggleButton value="agent">Agent </StyledToggleButton>
            </StyledToggleButtonGroup>
          </Stack>
        )}
        <Outlet />
      </Container>
    </Container>
  );
};

export default Auth;
export function ButtonComponent({ text, icon, ...props }) {
  return (
    <Button
      variant="contained"
      color="inherit"
      fullWidth
      sx={{
        ...props,
        "&:hover": {
          backgroundColor: grey[500],
          color: "#fff",
        },
      }}
      startIcon={icon}
    >
      {text}
    </Button>
  );
}
