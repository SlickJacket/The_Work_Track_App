import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  sidePanel: {
    backgroundColor: theme.palette.secondary.main,
    width: "240px",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
  },
}));

export default function sidePandel() {
  const classes = useStyles();

  return <Box className={classes.sidePanel}></Box>;
}
