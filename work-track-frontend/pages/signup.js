import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SignupForm from "../components/signupForm";

const useStyles = makeStyles((theme) => ({
  signupPageMain: {
    maxWidth: "1200px"
  },
  sideBox: {
    backgroundColor: "#404040",
    height: "100%",
    width: "50%",
    position: "absolute",
    left: "0",
  },
  formBox: {
    backgroundColor: "#f9f9f9",
    position: "absolute",
    right: "0",
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  formContainer: {
    width: "50%",
  }
}));

export default function Signup() {
  const classes = useStyles();
  return (
    <Box className={classes.signupPageMain}>
      <Box className={classes.sideBox} />

      <Box className={classes.formBox}>
        <Box className={classes.formContainer}>
        <SignupForm />
        </Box>
      </Box>
    </Box>
  );
}
