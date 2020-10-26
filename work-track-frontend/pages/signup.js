import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SignupForm from "../components/signupForm";

const useStyles = makeStyles((theme) => ({
  sideBox: {
    backgroundColor: "#404040",
    height: "100vh",
    width: "50vw",
    position: "absolute",
    left: "0",
  },
  formBox: {
    backgroundColor: "#f9f9f9",
    height: "100vh",
    width: "50vw",
    position: "absolute",
    right: "0",
  },
}));

export default function Signup() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.sideBox} />

      <Box className={classes.formBox}>
        <SignupForm />
      </Box>
    </Box>
  );
}
