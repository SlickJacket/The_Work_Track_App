import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  accountButton: {
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "start",
    alignItems: "space-between",
    width: "158px",
    paddingBottom: "20px",
  },
  accountName: {
    fontSize: "8px",
    color: "#F5F5F5",
    marginLeft: "10px",
  },
  arrowDownIcon: {
    width: 15,
    height: 15,
    color: "#F5F5F5",
  },
  listItemMenu: {
    "& div": {
      boxShadow: "none",
      backgroundColor: "rgba(232, 232, 232, 1)",
      borderRadius: "2px",
    },
  },
  listItemMenuText: {
    fontSize: "8px",
    color: theme.palette.secondary.main,
  },
}));

export default function AccountEmailDisplay() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        className={classes.accountButton}
        onClick={handleClick}
      >
        <AccountCircleIcon />
        <Typography variant="p" className={classes.accountName}>
          Bobby BuffaloBoy
        </Typography>
        <ExpandMoreIcon className={classes.arrowDownIcon} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className={classes.listItemMenu}
      >
        <MenuItem onClick={handleClose} className={classes.listItemMenuText}>
          Account info...
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.listItemMenuText}>
          Help & Learning
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.listItemMenuText}>
          What's new in WorkTrack
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className={classes.listItemMenuText}>
          Sign out
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
