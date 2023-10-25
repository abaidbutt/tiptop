import React, { useContext, useEffect } from "react";
import {
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Stack,
  Box,
  Divider,
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
    gap: theme.spacing(1.5),
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
    if (newauth === "signin" && state.role === "buyer") {
      navigate("/auth/signin");
    } else if (newauth === "signup" && state.role === "buyer") {
      navigate("/auth/signup");
    } else if (newauth === "signup" && state.role === "seller") {
      navigate("/auth/seller/signup");
    } else if (newauth === "signin" && state.role === "seller") {
      navigate("/auth/seller/signin");
    } else if (newauth === "signup" && state.role === "agent") {
      navigate("/auth/agent/signup");
    } else if (newauth === "signin" && state.role === "agent") {
      navigate("/auth/agent/signin");
    }
    dispatch({ type: "AUTH", payload: { current: newauth } });
  };
  const handleRole = (event, newrole) => {
    if (state.current === "signin" && newrole === "buyer") {
      navigate("/auth/signin");
    } else if (state.current === "signup" && newrole === "buyer") {
      navigate("/auth/signup");
    } else if (state.current === "signup" && newrole === "seller") {
      navigate("/auth/seller/signup");
    } else if (state.current === "signin" && newrole === "seller") {
      navigate("/auth/seller/signin");
    } else if (state.current === "signup" && newrole === "agent") {
      navigate("/auth/agent/signup");
    } else if (state.current === "signin" && newrole === "agent") {
      navigate("/auth/agent/signin");
    }
    dispatch({ type: "AUTH", payload: { role: newrole } });
  };
  console.log(auth);

  return (
    <Container
      maxWidth="md"
      sx={{
        p: 4,
      }}
    >
      <Container maxWidth="xs" sx={{ textAlign: "center" }}>
        {/* {state.current === "signin" && (
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Welcome to TipTop
          </Typography>
        )} */}
        <Stack
          alignItems="center"
          direction={"row"}
          justifyContent={"center"}
          spacing={1}
          sx={{ py: 2 }}
        >
          <Button
            onClick={(e) => handleChange(e, "signin")}
            sx={{
              borderBottom: `2px solid ${
                state.current === "signin" ? "aqua" : "transparent"
              }`,
              borderRadius: 0,
              transition: "border-bottom 0.3s ease",
            }}
          >
            Sign in
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            onClick={(e) => handleChange(e, "signup")}
            sx={{
              borderBottom: `2px solid ${
                state.current === "signup" ? "aqua" : "transparent"
              }`,
              borderRadius: 0,
              transition: "border-bottom 0.3s ease",
            }}
          >
            Sign up{" "}
          </Button>
        </Stack>

        {state.current === "signup" && location.pathname !== "/auth/verify" && (
          <Stack
            alignItems="center"
            direction={"row"}
            justifyContent={"center"}
            spacing={1}
            sx={{ py: 2 }}
          >
            <Button
              onClick={(e) => handleRole(e, "buyer")}
              sx={{
                borderBottom: `2px solid ${
                  state.role === "buyer" ? "aqua" : "transparent"
                }`,
                borderRadius: 0,
                transition: "border-bottom 0.3s ease",
              }}
            >
              Buyer
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              onClick={(e) => handleRole(e, "seller")}
              sx={{
                borderBottom: `2px solid ${
                  state.role === "seller" ? "aqua" : "transparent"
                }`,
                borderRadius: 0,
                transition: "border-bottom 0.3s ease",
              }}
            >
              Seller
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              onClick={(e) => handleRole(e, "agent")}
              sx={{
                borderBottom: `2px solid ${
                  state.role === "agent" ? "aqua" : "transparent"
                }`,
                borderRadius: 0,
                transition: "border-bottom 0.3s ease",
              }}
            >
              Agent
            </Button>
          </Stack>
        )}
       
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
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
