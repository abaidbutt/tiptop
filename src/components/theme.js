import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
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
        fontSize: "1.755rem",
      },
      h6: {
        fontFamily: "Uber Move",
      },
      subtitle1: {
        fontFamily: "Uber Move Medium",
        fontSize: "1.15rem",
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