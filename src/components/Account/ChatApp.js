import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Button,
  Divider,
  Container,
} from "@mui/material";
import {
  Search,
  Star,
  Phone,
  AttachFile,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { CustomAvatar } from "../CustomAvatar";
import styled from "@emotion/styled";
const users = [
  {
    name: "Andrew R.",
    role: "Real Estate Agent",
    src: "/assets/icons/profile_icon1.png",
    message: 3,
  },
  {
    name: "Mike Khan",
    role: "Support team",
    src: "https://source.unsplash.com/random",
  },
  {
    name: "Lisa Miller",
    role: "Real Estate Agent",
    src: "https://source.unsplash.com/random",
  },
  {
    name: "Jannet Gonzalez",
    role: "Real Estate Agent",
    src: "/assets/icons/profile_icon2.png",
    message: 2,
  },
  {
    name: "Nick Smith",
    role: "Support team",
    src: "https://source.unsplash.com/random",
  },
  {
    name: "Lisa Miller",
    role: "Real Estate Agent",
    src: "https://source.unsplash.com/random",
  },
  {
    name: "Jannet Gonzalez",
    role: "Real Estate Agent",
    src: "/assets/icons/profile_icon2.png",
    message: 2,
  },
  {
    name: "Nick Smith",
    role: "Support team",
    src: "https://source.unsplash.com/random",
  },
];
// const MuiListItemText = styled(ListItemText)(({ theme }) => ({

// }));
function ChatApp() {
  const userContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);

  useEffect(() => {
    const container = userContainerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const isScrolledToBottom = scrollHeight - clientHeight === scrollTop;
      setShowDownArrow(!isScrolledToBottom);
      setShowUpArrow(scrollTop > 0);
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    setScrollPosition(userContainerRef.current.scrollTop);
  };

  const handleScrollToTop = () => {
    userContainerRef.current.scrollTop = 0;
  };

  const handleScrollToBottom = () => {
    userContainerRef.current.scrollTop = userContainerRef.current.scrollHeight;
  };
  return (
    <Container>
      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 2 }}
      >
        <CustomAvatar variant="square" src="/assets/icons/icon12A.png" />
        <Typography variant="h5" fontWeight="bold">
          Message Center
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Left Side */}
        <Box sx={{ width: 300, borderRight: 1, borderColor: "divider" }}>
          {/* Top Section */}
          <Box p={2}>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      borderBottom: "2px solid aqua",
                      width: 2,
                    },
                  }}
                >
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                27
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Sent" />
                </ListItemButton>
                8
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
                8
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Trash" />
                </ListItemButton>
                0
              </ListItem>
            </List>
          </Box>
          <Divider />

          {/* Bottom Section */}
          <Box
            px={2}
            ref={userContainerRef}
            sx={{
              maxHeight: "calc(100vh - 260px)",
              overflowY: "auto",
              position: "relative",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "3px",
              },
              maxHeight: "calc(100vh - 260px)",
              overflowY: "auto",
              position: "relative",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "3px",
              },
            }}
            onScroll={handleScroll}
          >
            <Grid container spacing={2}>
              {users?.map((item, index) => (
                <Grid item xs={12}>
                  <UserItem
                    name={item.name}
                    avatar="/assets/icons/profile_icon2.png"
                    role="Support team"
                    message="3"
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <UserItem
                  name="Mike Khan"
                  avatar="https://source.unsplash.com/random"
                  role="Real Estate Egent"
                />
              </Grid>
              <Grid item xs={12}>
                <UserItem
                  name="Jane Smith"
                  avatar="/assets/icons/profile_icon1.png"
                  role="Support team"
                />
              </Grid>
              {/* Add more user items */}
            </Grid>
            <Box>
              {showDownArrow && (
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "calc(100% - 48px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  onClick={handleScrollToBottom}
                >
                  <KeyboardArrowDown color="primary" />
                </IconButton>
              )}
              {showUpArrow && (
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "calc(100% - 48px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 999,
                  }}
                  onClick={handleScrollToTop}
                >
                  <KeyboardArrowUp color="primary" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Upper Section */}
          <Box m={2}>
            <UserItem
              name="Lisa Miller"
              avatar="/assets/icons/profile_icon2.png"
              role="Real Estate Agent"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ my: 2 }}
            >
              <Stack direction="row" alignItems="center">
                <CustomAvatar src="/assets/icons/file3.jpg" variant="square" />
                Compose
              </Stack>
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <Search />
                </IconButton>
                <IconButton>
                  <AttachFile />
                </IconButton>
                <IconButton>
                  <Phone />
                </IconButton>
                <IconButton>
                  <Star />
                </IconButton>
              </Stack>
            </Stack>
            <Divider />
          </Box>
          {/* Message Section */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
            {/* Render messages */}
            <MessageItem sender={true} message="Hello!" />
            <MessageItem sender={false} message="Hi there!" />
            {/* Add more message items */}
          </Box>

          {/* Message Input */}
          <Box p={2} display="flex" alignItems="center">
            <TextField
              fullWidth
              placeholder="Type your message..."
              variant="outlined"
            />
            <Button size="large">
              <Avatar
                src="/assets/icons/send2.jpg"
                sx={{ width: 50, height: 50 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

function UserItem({ name, avatar, role, message }) {
  return (
    <Stack direction={"row"} justifyContent="space-between" alignItems="center">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CustomAvatar src={avatar} sx={{ border: "2px solid aqua" }} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Stack>
  );
}

function MessageItem({ sender, message }) {
  return (
    <Box my={1} p={1 / 2} textAlign={sender ? "left" : "right"}>
      {sender ? (
        <Typography color="text.secondary" sx={{ fontSize: "12px", p: 1 / 2 }}>
          10:00 AM
        </Typography>
      ) : null}
      <Typography
        sx={{
          background: !sender ? "#eee" : "#f7f7f7",
          px: 2,
          py: 1,
          borderRadius: 2,
        }}
        component="span"
        variant="body1"
      >
        {message}
      </Typography>
    </Box>
  );
}

export default ChatApp;
