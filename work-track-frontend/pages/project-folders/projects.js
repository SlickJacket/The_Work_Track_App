import React, { Fragment } from "react";
import Router, { withRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SidePanel from "../../components/sidepanel/SidePanel";

const useStyles = makeStyles((theme) => ({}));

function Projects() {
  const classes = useStyles();

  return (
    <Fragment>
      <SidePanel />
    </Fragment>
  );
}

export default withRouter(Projects);
