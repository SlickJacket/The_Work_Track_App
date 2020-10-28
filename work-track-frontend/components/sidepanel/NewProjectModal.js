import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import Checkbox from "@material-ui/core/Checkbox";

import { client } from "../../api/client";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    top: "30%",
    left: "40%",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    outline: "0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 5),
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
  createButton: {
    color: "#F9F9F9",
    borderRadius: "50px",
  },
  starIcon: {
    color: "gold",
  },
}));

export default function NewProjectModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [starred, setStarred] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (e) => {
    setStarred(!starred);
  };

  const handleTitleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const addProject = (e) => {
    e.preventDefault();
    const newProjectObj = {
      title: projectTitle,
      starred: starred,
      user_id: parseInt(localStorage.id),
    };

    client("projects", { body: newProjectObj });

    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Create a New Project!</h2>
      <FormGroup column="true">
        <TextField label="Title" onChange={handleTitleChange} />
        <FormControlLabel
          control={
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon className={classes.starIcon} />}
              onChange={handleCheckboxChange}
            />
          }
          label="Add to Shortcuts?"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.createButton}
          onClick={addProject}
        >
          Create
        </Button>
      </FormGroup>
    </div>
  );

  return (
    <Fragment>
      <Button
        color="primary"
        variant="contained"
        className={classes.newButton}
        onClick={handleOpen}
      >
        <AddIcon fontSize="small" />
        New Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Fragment>
  );
}
