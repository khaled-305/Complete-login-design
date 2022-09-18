import * as React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const userTypeOption = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "editor",
    label: "Editor",
  },
  {
    value: "contributor",
    label: "Contributor",
  },
];

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="mt-8 md:w-3/4">
      <p className="text-3xl font-semibold">Let's set up your account</p>

      <p className="my-8 text-sm">
        Already have an account?{" "}
        <Link className="text-blue-600 font-semibold" to="login">
          Sign in
        </Link>{" "}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("yourName", { required: true })}
          error={!!errors.yourName}
          defaultValue={""}
          type="text"
          fullWidth
          label="Your name"
          helperText={errors.yourName ? "Please enter your name" : ""}
          margin="dense"
        />
        <TextField
          {...register("emailAddress", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          error={!!errors.emailAddress}
          defaultValue={""}
          fullWidth
          label="Email address"
          helperText={
            errors.emailAddress ? "Please enter a valid email address" : ""
          }
          margin="dense"
        />
        <TextField
          {...register("userType", { required: true })}
          error={!!errors.userType}
          defaultValue={""}
          helperText={errors.userType ? "Please select a user type" : ""}
          fullWidth
          select
          label="I would describe my user type as"
          margin="dense"
        >
          {userTypeOption.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>

        <FormControl fullWidth margin="dense" variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            {...register("password", { required: true, minLength: 8 })}
            error={!!errors.password}
            defaultValue={""}
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText>
            {errors.password ? "Minimum 8 characters" : ""}
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          sx={{ marginTop: "20px" }}
          variant="contained"
          disabled={!isDirty && !isValid}
        >
          Next
        </Button>
      </form>

      <div className="mt-8">
        <p className="text-xs leading-loose">
          By clicking the "Next" button, you agree to creating a free account,
          and to{" "}
          <Link className="text-blue-600 font-semibold" to="terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-blue-600 font-semibold" to="policy">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Form;
