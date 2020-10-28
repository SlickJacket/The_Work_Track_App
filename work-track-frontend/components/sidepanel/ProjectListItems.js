import React, { useState, useEffect, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { client } from "../../api/client";

const useStyles = makeStyles((theme) => ({}));

export default function ProjectListItems() {
  const classes = useStyles();
  const [projects, setProjects] = useState();

  useEffect(() => {
    client("projects").then((data) => {
      const list = document.getElementById("projectsList");

      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id === parseInt(localStorage.id)) {
          console.log(data[i].title);
          list.innerHTML += `<div class="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button" tabindex="0" role="button" aria-disabled="false"><div class="MuiListItemText-root"><span class="MuiTypography-root MuiListItemText-primary makeStyles-listText-4 MuiTypography-body1 MuiTypography-displayBlock">${data[i].title}</span></div><span class="MuiTouchRipple-root"></span></div>`;
        }
      }
    });
  }, []);

  return <List component="div" disablePadding id="projectsList"></List>;
}
