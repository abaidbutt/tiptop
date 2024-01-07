import { LocationOn, Public } from "@mui/icons-material";
import {
  Avatar,
  Container,
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [msg, setMsg] = useState();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProfile = async (data) => {
    try {
    } catch (err) {
      setMsg({
        open: true,
        type: "err",
        txt: "Invalid Credentials",
      });
    }
  };
  return (
    <div>
      <Container
        maxWidth="xxl"
        sx={{
          backgroundColor: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(/assets/Banner.svg)",
          pt: 15,
          borderRadius: "8px",
        }}
        disableGutters
      >
        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid item xs={12} md={2}>
            <Avatar
              variant="rounded"
              sx={{
                width: "150px",
                height: "150px",
                background: "transparent",
              }}
            >
              <img
                src="/assets/Dark.svg"
                placeholder="dark logo"
                layout="fill"
                objectFit="contain"
              />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ py: 2 }}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="subtitl2" color="text.secondary">
                info@townrecipe.io
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Avatar variant="rounded">
                  <LocationOn />
                </Avatar>
                <Box>
                  <Typography variant="h6">Montreal, Canada</Typography>
                  <Typography variant="subtitl2" color="text.secondary">
                    Location{" "}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Avatar variant="rounded">
                  <Public />
                </Avatar>
                <Box>
                  <Typography variant="h6">info@bia.com</Typography>
                  <Typography variant="subtitl2" color="text.secondary">
                    Advertising
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography component="h4" variant="h4">
              Send a Message
            </Typography>

            <form
              style={{ width: "100%" }}
              onSubmit={handleSubmit(handleProfile)}
            >
              <Controller
                name="FirstName"
                control={control}
                defaultValue=""
                rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    label="FirstName Address"
                    name="FirstName"
                    autoComplete="FirstName"
                    error={!!errors?.FirstName}
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
                  />
                )}
              />

              <FormHelperText error>
                {!!errors?.firstName && errors?.firstName?.message}
              </FormHelperText>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    label="email Address"
                    name="email"
                    autoComplete="email"
                    error={!!errors?.email}
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
                  />
                )}
              />

              <FormHelperText error>
                {!!errors?.email && errors?.email?.message}
              </FormHelperText>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "This Field is Required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    multiline
                    rows={4}
                    variant="filled"
                    margin="normal"
                    size="100px"
                    fullWidth
                    label="message "
                    name="message"
                    autoComplete="message"
                    error={!!errors?.message}
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
                  />
                )}
              />

              <FormHelperText error>
                {!!errors?.email && errors?.email?.message}
              </FormHelperText>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    margin: 3,
                    padding: 1,
                    borderRadius: 1,
                    color: "white",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                p: 5,
                my: 3,
              }}
            >
              <Avatar
                sx={{
                  width: "274px",
                  height: "190px",
                  background: "transparent",
                }}
              >
                <img
                  src="/assets/Undraw.svg"
                  alt="Chat"
                  layout="fill"
                  objectFit="contain"
                />
              </Avatar>
              {/* <img
                src={"/assets/Undraw.svg"}
                style={{
                  maxWidth: "274px",
                  maxHeight: "190px",
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
                variant="rounded"
              /> */}
              <Typography variant="h6">Live Chat</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Chat with our support. We are online 9 am - 5 pm EST time. Thank
                you!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  margin: 3,
                  padding: 1,
                  borderRadius: 1,
                }}
                onClick={() => navigate("/chatapp")}
              >
                Start Chat
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
