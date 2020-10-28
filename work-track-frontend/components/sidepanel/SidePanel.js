import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SearchBar from "./SearchBar";
import LabelIcon from "@material-ui/icons/Label";
import DeleteIcon from "@material-ui/icons/Delete";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  sidePanel: {
    backgroundColor: theme.palette.secondary.main,
    width: "160px",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
    overflow: "hidden",
  },
  listText: {
    color: "white",
    fontSize: "10px",
  },
  searchNew: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  newButton: {
    color: "#f9f9f9",
    width: "140px",
    height: "25px",
    fontSize: "11px",
    borderRadius: "50px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "start",

    "& span": {
      position: "absolute",
      left: "1px",
    },
  },
  icons: {
    color: "#F9F9F9",
  },
  listFolders: {
    paddingLeft: "1px",
  },
  listItems: {
    paddingLeft: "8px",

    "& div": {
      marginLeft: "5px",
    },
  },
}));

export default function sidePandel() {
  const classes = useStyles();
  const [openShortcuts, setOpenShortCuts] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const shortCutsClick = () => {
    setOpenShortCuts(!openShortcuts);
  };

  const projectsClick = () => {
    setOpenProjects(!openProjects);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      color="secondary"
    >
      <div className={classes.searchNew}>
        <SearchBar />
        <Button
          color="primary"
          variant="contained"
          className={classes.newButton}
        >
          <AddIcon fontSize="small" />
          New Project
        </Button>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          key={"Short Cuts"}
          onClick={shortCutsClick}
          className={classes.listFolders}
        >
          {openShortcuts ? (
            <ArrowDropDownIcon className={classes.icons} />
          ) : (
            <ArrowRightIcon className={classes.icons} />
          )}
          <ListItemText
            primary={"Short Cuts"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <Collapse in={openShortcuts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="note 2"
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          </List>
        </Collapse>

        {/* projects */}
        <ListItem
          button
          key={"Projects"}
          onClick={projectsClick}
          className={classes.listFolders}
        >
          {openProjects ? (
            <ArrowDropDownIcon className={classes.icons} />
          ) : (
            <ArrowRightIcon className={classes.icons} />
          )}
          <ListItemText
            primary={"Projects"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <Collapse in={openProjects} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="Good Money"
                classes={{ primary: classes.listText }}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Labels"} className={classes.listItems}>
          <LabelIcon fontSize="small" className={classes.icons} />
          <ListItemText
            primary={"Labels"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <ListItem button key={"Trash"} className={classes.listItems}>
          <DeleteIcon fontSize="small" className={classes.icons} />
          <ListItemText
            primary={"Trash"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
