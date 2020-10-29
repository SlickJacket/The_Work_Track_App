import React, { useState, useEffect, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { client } from "../../api/client";

const useStyles = makeStyles((theme) => ({
  listText: {
    color: "white",
    fontSize: "10px",
  },
}));

export default function ProjectListItems() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client("projects").then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <List component="div" disablePadding id="projectsList">
      {projects.map((p) => {
        return (
          <ListItem button className={classes.nested}>
            <ListItemText
              key={p.title}
              primary={p.title}
              classes={{ primary: classes.listText }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
