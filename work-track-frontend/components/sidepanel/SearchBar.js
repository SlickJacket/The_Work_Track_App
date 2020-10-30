import React, { useState } from "react";

import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  BarStyling: {
    width: "140px",
    backgroundColor: "rgba(192, 192, 192, 0.3)",
    borderRadius: "50px",
    border: "none",
    marginBottom: "10px",
    padding: "3px",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "1px",
    color: "rgba(192, 192, 192, 1)",
    width: 15,
    height: 15,
  },
  inputField: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "11px",
    color: "black",
    overflow: "hidden",

    "&::placeholder": {
      color: "rgba(192, 192, 192, 0.6)",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  return (
    <div className={classes.BarStyling}>
      <SearchIcon className={classes.searchIcon} fontSize="small" />
      <input
        className={classes.inputField}
        value={keyword}
        placeholder={"Search"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
