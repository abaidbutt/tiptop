import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/index.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Buy from "./components/Buy";
import RecieveCode from "./components/Auth/RecieveCode";

import Profile from "./components/Auth/Profile";
import Security from "./components/Auth/Security";
import Identity from "./components/Auth/Identity";
import Listings from "./components/Account/Listings";
import ReferralCenter from "./components/Account/ReferralCenter";
import Reward from "./components/Account/Reward";
import Wallet from "./components/Account/Wallet";
import ChatApp from "./components/Account/ChatApp";
import SellerSignup from "./components/Seller/SignUp";
import SignupBonus from "./components/Seller/SignupBonus";
import SellerProfile from "./components/Seller/Profile";
import SellerListing from "./components/Seller/SellerListing";
import PostListing from "./components/Auth/PostListing";
import Auth from "./components/Auth";
import ServiceCenter from "./components/Account/ServiceCenter";
import FindAgents from "./components/Account/FindAgents";
import Settings from "./components/Account/Settings";
import { Provider } from "./store";
import SellerSignIn from "./components/Seller/SignIn";
import SignIn from "./components/Auth/SignIn";
import Verification from "./components/Auth/Verification";

import SignupDetail from "./components/Auth/SignUpDetail";
import Signup from "./components/Auth/Signup";
import MoreDetails from "./components/Seller/MoreDetails";
const defaultTheme = createTheme({
  palette: {
    primary: { main: "#09FFF9" },
    secondary: { main: "#020202" },
  },
  typography: {
    h1: {
      fontFamily: "Uber Move Bold",
    },
    h2: {
      fontFamily: "Uber Move Bold",
    },
    h3: {
      fontFamily: "Uber Move Bold",
      fontSize: "2.375rem",
    },
    h4: {
      fontFamily: "Uber Move Bold",
      fontSize: "1.875rem",
    },
    h5: {
      fontFamily: "Uber Move Medium",
    },
    h6: {
      fontFamily: "Uber Move",
    },
    subtitle1: {
      fontFamily: "Uber Move Medium",
    },
    subtitle2: {
      fontFamily: "Uber Move",
    },
    body1: {
      fontFamily: "Uber Move Medium",
    },
    body2: {
      fontFamily: "Uber Move",
    },
    caption: {
      fontFamily: "Uber Move Medium",
    },
    overline: {
      fontFamily: "Uber Move Medium",
    },
    inherit: {
      fontFamily: "Uber Move Medium",
    },
    button: {
      fontFamily: "Uber Move Bold",
      textTransform: "capitalize",
      borderRadius: 2,
      // fontWeight: "bold",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
        disableRipple: true,
        color: "inherit",
      },
      styleOverrides: {
        root: {},
        // "&:hover": {
        //   backgroundColor: "red",
        // },
      },
    },
    MuiButtonBase: {},
  },
});
const router = createBrowserRouter([
  {
    path: "",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/services",
        element: <ServiceCenter />,
      },
      {
        path: "/findagent",
        element: <FindAgents />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
      {
        path: "/post/listings",
        element: <PostListing />,
      },
      {
        path: "/referral",
        element: <ReferralCenter />,
      },
      {
        path: "/reward",
        element: <Reward />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/chatapp",
        element: <ChatApp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/security",
        element: <Security />,
      },

      {
        path: "/identity",
        element: <Identity />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
      {
        path: "/seller/listing",
        element: <SellerListing />,
      },
      {
        path: "/seller/profile",
        element: <SellerProfile />,
      },
      {
        path: "/seller/details",
        element: <MoreDetails />,
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "verify",
            element: <RecieveCode />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "seller/signup",
            element: <Signup />,
          },
          {
            path: "signup/detail",
            element: <SignupDetail />,
          },
          {
            path: "seller/signup/detail",
            element: <SellerSignup />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "seller/signin",
            element: <SellerSignIn />,
          },
          {
            path: "seller/signupbonus",
            element: <SignupBonus />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
function Main() {
  return (
    <Provider>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
root.render(
  <>
    <Main />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
