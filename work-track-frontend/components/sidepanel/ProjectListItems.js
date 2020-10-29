import React, { useState, useEffect, Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import { client } from "../../api/client";

const useStyles = makeStyles((theme) => ({
  projectList: {
    maxHeight: "200px",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "0.3em",
    },

    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: "1px solid slategrey",
    },
  },
  nested: {
    display: "flex",
    flexDirection: "row",
    height: "20px",
  },
  listText: {
    color: "white",
    fontSize: "9px",
    marginLeft: "10px",
    textTransform: "capitalize",
  },
  icons: {
    color: "#F9F9F9",
    width: 12,
    height: 12,
    marginLeft: "10px",
  },
  listItemMenu: {
    "& div": {
      boxShadow: "none",
      marginLeft: "50px",
      backgroundColor: "rgba(232, 232, 232, 0.4)",
      borderRadius: "2px",
    },
  },
  listItemMenuText: {
    fontSize: "8px",
    color: theme.palette.secondary.main,
  },
}));

export default function ProjectListItems() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    client("projects").then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <List component="div" disablePadding className={classes.projectList}>
      {projects.map((p) => {
        return (
          <Fragment>
            <ListItem
              button
              className={classes.nested}
              onContextMenu={handleClick}
            >
              <FolderOpenIcon fontSize="small" className={classes.icons} />
              <ListItemText
                key={p.title}
                primary={p.title}
                classes={{ primary: classes.listText }}
              />
            </ListItem>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              className={classes.listItemMenu}
            >
              <MenuItem
                onClick={handleClose}
                className={classes.listItemMenuText}
              >
                New Notebook
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className={classes.listItemMenuText}
              >
                New Workbook
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className={classes.listItemMenuText}
              >
                Rename
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className={classes.listItemMenuText}
              >
                Add to Shortcuts
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className={classes.listItemMenuText}
              >
                Trash
              </MenuItem>
            </Menu>
          </Fragment>
        );
      })}
    </List>
  );
}
