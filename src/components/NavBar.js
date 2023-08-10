import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import {
  ListItemAvatar,
  Popover,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import Footer from "./Footer";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { AccountCircle, ExpandMore } from "@mui/icons-material";
import { Context } from "../store";
import { CustomAvatar } from "./CustomAvatar";
const pages = [
  { name: "Buy", route: "/buy" },
  {
    name: "Sell",
    children: [
      { name: "Seller", route: "/auth/seller/signin" },
      { name: "Agent", route: "/auth/signin" },
    ],
  },
  { name: "Mortgage", route: "mortgage" },
];
const authpages = [
  { name: "Log in", route: "/auth/signin" },
  { name: "Sign up", route: "/auth/signup" },
  { name: "Exchange", route: "exchange" },
];
const settings = [
  { name: "English", value: "EN" },
  { name: "Spanish", value: "SP" },
  { name: "German", value: "GR" },
];
const drawerWidth = 240;

function LogoIcon({ screen, ...props }) {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(Context);
  return (
    <Box
      sx={{
        display: { xs: screen ? "none" : "flex", md: screen ? "flex" : "none" },
        // flexGrow: screen ? 0 : 1,
        ...props,
      }}
      onClick={() => {
        navigate("/");
        dispatch({ type: "SIGNOUT" });
      }}
    >
      <Typography
        variant="h4"
        href="/"
        component="a"
        color="inherit"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Tip
      </Typography>
      <Typography
        variant="h4"
        color="primary"
        href="/"
        component="a"
        sx={{
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Top
      </Typography>
    </Box>
  );
}
function NavBar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = React.useContext(Context);
  const [language, setLanguage] = React.useState("EN");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorMenus, setAnchorMenus] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  console.log(location.pathname?.startsWith("/auth"));
  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMenus = (event) => {
    setAnchorMenus(event.currentTarget);
  };

  const handleCloseMenus = () => {
    setAnchorMenus(null);
  };
  const handleToggleMenus = (event) =>
    Boolean(anchorMenus)
      ? setAnchorMenus(null)
      : setAnchorMenus(event.currentTarget);

  const handleDrawerToggle = (event) => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const drawer = (
    <div>
      <Toolbar />

      <List>
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.children ? (
              <>
                <ListItem
                  disablePadding
                  onClick={handleClick}
                  sx={{
                    borderBottom:
                      page.route === location.pathname
                        ? "2px solid aqua"
                        : "2px solid transparent",

                    transition: "border-bottom 0.3s ease",
                    "&:hover .MuiTypography-root": {
                      borderBottom: "2px solid aqua",
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={page.name} component="span" />
                  </ListItemButton>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {page.children.map((child, index) => (
                      <ListItem
                        key={child.name}
                        onClick={() => navigate(child.route)}
                        sx={{ py: 0, my: 1 / 4 }}
                      >
                        <ListItemButton
                          sx={{
                            "&:hover": { border: "2px solid #09FFF9" },
                            border: "2px solid #7F7F7F",
                            textAlign: "left",
                            // p: 0,
                            // m: 0,
                          }}
                        >
                          <ListItemText
                            sx={{
                              textAlign: "left",
                              "& .MuiMenuItem-root": {
                                textAlign: "left",
                              },
                            }}
                            primary={child.name}
                            component="span"
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                disablePadding
                onClick={() => navigate(page.route)}
                sx={{
                  borderBottom:
                    page.route === location.pathname
                      ? "2px solid aqua"
                      : "2px solid transparent",

                  transition: "border-bottom 0.3s ease",
                  "&:hover .MuiTypography-root": {
                    borderBottom: "2px solid aqua",
                    display: "inline",
                  },
                }}
              >
                <ListItemButton>
                  <ListItemText primary={page.name} component="span" />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <List>
        {state.auth ? (
          <ListItem onClick={handleToggleMenus} disablePadding>
            <ListItemButton sx={{ border: "1px solid #000" }}>
              <ListItemIcon>
                <AccountCircle fontSize="large" />
              </ListItemIcon>
              <ListItemText primary={state.role} />
            </ListItemButton>
          </ListItem>
        ) : (
          authpages.map((page) => (
            <ListItem
              disablePadding
              onClick={() => navigate(page.route)}
              sx={{
                backgroundColor: page.name === "Sign up" ? "#09FFFA" : "",
                "&:hover": {
                  backgroundColor: "#09FFFA",
                },
              }}
            >
              <ListItemButton>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar color="inherit">
        <Container maxWidth="xl" disableGutters>
          <Toolbar>
            {/* <LogoIcon screen={true} /> */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
            <LogoIcon screen={false} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {!location.pathname?.startsWith("/auth") &&
                pages.map((page) => (
                  <Box key={page.name}>
                    <Button
                      size="large"
                      sx={{
                        my: 2,
                        display: "block",
                        borderRadius: 0,
                        borderBottom:
                          page.route === location.pathname
                            ? "2px solid aqua"
                            : "2px solid transparent",

                        transition: "border-bottom 0.3s ease",
                        "&:hover": {
                          borderBottom: "2px solid aqua",
                        },
                      }}
                      onClick={(e) => {
                        if (page.children?.length) {
                          handleOpen(e);
                        } else {
                          navigate(page.route);
                        }
                      }}
                      onMouseEnter={(e) => {
                        if (page.children?.length) {
                          handleOpen(e);
                        }
                      }}
                      // onMouseLeave={() => page.children?.length && handleClose()}
                      color="secondary"
                    >
                      {page.name}
                    </Button>
                  </Box>
                ))}
              <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                disableRestoreFocus
                sx={{
                  p: 0,
                  mt: 2,
                  "& .MuiList-root": { py: 0, background: "#fff" },
                  "& .MuiPaper-root": { background: "transparent" },
                }}
              >
                {pages[1].children?.map((item, index) => (
                  <MenuItem
                    key={item.name}
                    component={Link}
                    to={item.route}
                    onClick={handleClose}
                    sx={{
                      "&:hover": { border: "2px solid #09FFF9" },
                      border: "2px solid #7F7F7F",
                      px: 5,
                      mb: index === 0 ? 1 / 2 : 0,
                      mt: index === 1 ? 1 / 2 : 0,
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Popover>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <LogoIcon screen={true} />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {!location.pathname?.startsWith("/auth") && (
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  startIcon={<ExpandMore />}
                >
                  {language}
                </Button>
              )}

              <Menu
                sx={{
                  mt: "45px",
                  "&.MuiMenu-root": { color: "#000" },
                  display: { xs: "none", md: "flex" },
                }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.value}
                    onClick={() => {
                      setLanguage(setting.value);
                      handleCloseUserMenu();
                    }}
                    value={settings.value}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              {state.auth ? (
                <Button
                  onClick={handleOpenMenus}
                  startIcon={<AccountCircle fontSize="large" />}
                  variant="outlined"
                >
                  {state.role}
                </Button>
              ) : (
                !location.pathname?.startsWith("/auth") &&
                authpages.map((page) => (
                  <Button
                    size="large"
                    key={page.name}
                    onClick={() => navigate(page.route)}
                    color="secondary"
                    sx={{
                      my: 2,
                      mx: 1 / 3,
                      display: "block",
                      backgroundColor: page.name === "Sign up" ? "#09FFFA" : "",
                      borderBottom: "2px solid transparent",
                      transition: "border-bottom 0.3s ease",
                      "&:hover": {
                        borderBottom:
                          page.name !== "Sign up" ? "2px solid #09FFFA" : "",
                        backgroundColor:
                          page.name === "Sign up" ? "#09FFFA" : "",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))
              )}
            </Box>
            <Menu
              anchorEl={anchorMenus}
              id="account-menu"
              open={Boolean(anchorMenus)}
              onClose={handleCloseMenus}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {menusItems?.map((item, index) =>
                state.role === "Agent" ? (
                  <MenuItem
                    onClick={() => navigate(item.route)}
                    sx={{
                      borderBottom: "2px solid transparent",
                      transition: "border-bottom 0.3s ease",
                      "&:hover .MuiTypography-root": {
                        borderBottom: "2px solid aqua",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <CustomAvatar variant="square" src={item.src} />
                    </ListItemAvatar>
                    <Typography>{item.name}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() =>
                      navigate(
                        item.name === "Profile"
                          ? "/seller/profile"
                          : item.name === "Post a Listing"
                          ? "/seller/listing"
                          : item.route
                      )
                    }
                    sx={{
                      borderBottom: "2px solid transparent",
                      transition: "border-bottom 0.3s ease",
                      "&:hover .MuiTypography-root": {
                        borderBottom: "2px solid aqua",
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <CustomAvatar variant="square" src={item.src} />
                    </ListItemAvatar>
                    <Typography>{item.name}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Toolbar />
        <Container maxWidth="xxl" disableGutters>
          <Container
            maxWidth={
              location.pathname === "/" || location.pathname === "/buy"
                ? "xl"
                : "md"
            }
            sx={{ my: 2 }}
            disableGutters
          >
            <Outlet />
          </Container>
          {location.pathname === "/" || location.pathname === "/buy" ? (
            <Footer />
          ) : null}
        </Container>
      </Box>
    </>
  );
}
export default NavBar;
const menusItems = [
  {
    name: "Profile",
    src: "/assets/icons/smily_face.png",
    route: "/profile",
  },

  {
    name: "My Listings",
    src: "/assets/icons/listings.png",
    route: "/listings",
  },
  {
    name: "Post a Listing",
    src: "/assets/icons/icon_10B.png",
    route: "/post/listings",
  },
  {
    name: "Messages",
    src: "/assets/icons/icon12A.png",
    route: "/chatapp",
  },
  {
    name: "Wallet",
    src: "/assets/icons/wallet_icon.png",
    route: "/wallet",
  },
  {
    name: "Rewards",
    src: "/assets/icons/rewards_icon.png",
    link: "/reward",
  },
  {
    name: "Settings",
    src: "/assets/icons/icon6.png",
    route: "/settings",
  },
  {
    name: "Referral",
    src: "/assets/icons/icon5.png",
    route: "/referral",
  },
  {
    name: "Verification",
    src: "/assets/icons/id_card.png",
    route: "/identity",
  },
  {
    name: "Services",
    src: "/assets/icons/list1.png",
    route: "/services",
  },
];
