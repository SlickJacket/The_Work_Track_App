import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SidePanel from "../components/sidePanel";

const useStyles = makeStyles((theme) => ({}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Fragment>
      <SidePanel />
    </Fragment>
  );
}
