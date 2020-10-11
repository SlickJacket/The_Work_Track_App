import React, { Fragment, useState } from "react";
import Router, { withRouter } from "next/router";

import { client } from "../api/client";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "30vw",
    margin: "auto",
    top: "20%",
    position: "relative",
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  submitButton: {
    marginTop: "40px",
  },
}));

export default function SignupForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserObj = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      phone_number: phoneNumber,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    client("signup", { body: newUserObj }).then((data) => {
      if (data.jwt) {
        localStorage.jwt = data.jwt;
        localStorage.username = data.user.username;
        localStorage.id = data.user.id;

        Router.push({
          pathname: "/projects",
        });
      }
    });
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h2">Sign Up</Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          label="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          label="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <TextField
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          type="password"
          label="Password Confirmation"
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
