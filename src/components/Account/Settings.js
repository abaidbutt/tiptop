import {
  Button,
  Container,
  Stack,
  Typography,
  Link,
  Grid,
} from "@mui/material";

import React from "react";
import { CustomAvatar } from "../CustomAvatar";

const Reward = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Stack spacing={1} sx={{ my: 6 }}>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <CustomAvatar variant="square" src="/assets/icons/icon6.png" />
          <Typography variant="h5" fontWeight="bold">
            Security Settings
          </Typography>
        </Stack>
        <Typography variant="h6" align="center">
          Increase your account security
        </Typography>
      </Stack>
      <Container maxWidth="md">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid sm={12} item md={6}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" spacing={4} alignItems={"center"}>
                <CustomAvatar
                  src="/assets/icons/sec_key1.jpg"
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Security Key
                  </Typography>
                  <Link color="text.secondary">What is Security Key?</Link>
                  <Typography variant="subtitle1" color="text.secondary">
                    Unset
                  </Typography>
                </Stack>
              </Stack>
              <Button variant="outlined" color="inherit">
                Setup
              </Button>
            </Stack>
          </Grid>
          <Grid sm={12} item md={6}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" spacing={4} alignItems={"center"}>
                <CustomAvatar
                  src="/assets/icons/list1.png"
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Address Managment
                  </Typography>
                  <Typography variant="body2" paragraph>
                    This allows you to add notes and save your withdrawal
                    addresses in whitelist
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Withdrawal Whitelist
                  </Typography>
                </Stack>
              </Stack>
              <Button variant="outlined" color="inherit">
                Manage
              </Button>
            </Stack>
          </Grid>
          <Grid sm={12} item md={6}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" spacing={4} alignItems={"center"}>
                <CustomAvatar
                  src="/assets/icons/Google_Authenticator.png"
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Google Authentication
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Used for withdrawals and security modifications
                  </Typography>
                  <Link color="text.secondary">Having an issue?</Link>
                </Stack>
              </Stack>
              <Button variant="outlined" color="inherit">
                Setup
              </Button>
            </Stack>
          </Grid>
          <Grid sm={12} item md={6}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" spacing={4} alignItems={"center"}>
                <CustomAvatar
                  src="/assets/icons/anti-phishing2C.jpg"
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    Anti-phishing Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This feature helps you to distinguish notification emails
                    from TipTop from phishing attempts.
                  </Typography>
                </Stack>
              </Stack>
              <Button variant="outlined">Update</Button>
            </Stack>
          </Grid>
          <Grid sm={12} item container>
            <Grid md={6} sm={12}>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction="row" spacing={4} alignItems={"center"}>
                  <CustomAvatar
                    src="/assets/icons/phone_authenticator2.jpg"
                    variant="square"
                    sx={{ width: 50, height: 50 }}
                  />
                  <Stack>
                    <Typography variant="h6" fontWeight="bold">
                      SMS Authentication
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Used for withdrawals and security modifications
                    </Typography>
                  </Stack>
                </Stack>
                <Button variant="outlined">Active</Button>
              </Stack>
            </Grid>
          </Grid>

          <Grid sm={12} item md={6}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" spacing={4} alignItems={"center"}>
                <CustomAvatar
                  src="/assets/icons/email_auth.jpg"
                  variant="square"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight="bold">
                    E-mail address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Used for withdrawals and security modifications
                  </Typography>
                </Stack>
              </Stack>
              <Button variant="outlined" color="inherit">
                Setup
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Reward;
