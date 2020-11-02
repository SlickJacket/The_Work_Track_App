import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchBar from "./SearchBar";
import LabelIcon from "@material-ui/icons/Label";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import StarIcon from "@material-ui/icons/Star";

import NewProjectModal from "./NewProjectModal";
import ProjectListItems from "./ProjectListItems";
import AccountEmailDisplay from "./AccountEmailDisplay";

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
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  icons: {
    color: "#F9F9F9",
    width: 15,
    height: 15,
  },
  arrowIcons: {
    color: "#F9F9F9",
  },
  listFolders: {
    paddingLeft: "1px",

    "& div": {
      marginLeft: "5px",
    },
  },
  listItems: {
    paddingLeft: "8px",
    marginLeft: "18px",

    "& div": {
      marginLeft: "5px",
    },
  },
}));

export default function sidePandel() {
  const classes = useStyles();
  const [openShortCuts, setOpenShortCuts] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projects, setProjects] = useState();

  const shortCutsClick = () => {
    setOpenShortCuts(!openShortCuts);
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
        <AccountEmailDisplay />
        <SearchBar />
        <NewProjectModal />
      </div>
      <Divider />
      <List>
        <ListItem
          button
          key={"ShortCuts"}
          onClick={shortCutsClick}
          className={classes.listFolders}
        >
          {openShortCuts ? (
            <ArrowDropDownIcon className={classes.arrowIcons} />
          ) : (
            <ArrowRightIcon className={classes.arrowIcons} />
          )}
          <StarIcon fontSize="small" className={classes.icons} />
          <ListItemText
            primary={"Shortcuts"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <Collapse in={openShortCuts} timeout="auto" unmountOnExit>
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
            <ArrowDropDownIcon className={classes.arrowIcons} />
          ) : (
            <ArrowRightIcon className={classes.arrowIcons} />
          )}
          <FolderIcon fontSize="small" className={classes.icons} />
          <ListItemText
            primary={"Projects"}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <Collapse in={openProjects} timeout="auto" unmountOnExit>
          <ProjectListItems />
        </Collapse>
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
      <Divider />
    </Drawer>
  );
}
