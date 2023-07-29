import React, { useContext } from "react";
import {
  TextField,
  Stack,
  Button,
  Divider,
  FormHelperText,
} from "@mui/material";
import { Google, Facebook, Apple } from "@mui/icons-material";
import { ButtonComponent } from "../Auth";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  email: yup.string().email("Inavalid Email").required(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});
const SellerSignIn = () => {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Stack spacing={1}>
          <TextField
            type="email"
            variant="standard"
            label="Email"
            fullWidth
            {...register("email", { required: "This Email is required" })}
          />

          <FormHelperText error>{errors?.email?.message}</FormHelperText>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                type="password"
                variant="standard"
                label="Password"
                fullWidth
                helperText={errors?.password?.message}
                {...field}
              />
            )}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            // onClick={() => {
            //   dispatch({ type: "SIGNIN", payload: "Seller" });
            //   navigate("/seller/profile");
            // }}
          >
            Get Started
          </Button>
        </Stack>
      </form>
      <Stack sx={{ mt: 1 }}>
        <Button>Forgot your password</Button>
      </Stack>
      <Divider>or</Divider>
      <Stack spacing={1} sx={{ mt: 1 }}>
        <ButtonComponent
          text="Continue with Google"
          icon={<Google sx={{ color: "#E34133" }} fontSize="large" />}
        />
        <ButtonComponent
          text="Continue with Apple"
          icon={<Apple fontSize="large" sx={{ color: "#909090" }} />}
        />
        <ButtonComponent
          text="Continue with Facebook"
          icon={<Facebook sx={{ color: "#1674EA" }} fontSize="large" />}
        />
      </Stack>
    </div>
  );
};

export default SellerSignIn;
