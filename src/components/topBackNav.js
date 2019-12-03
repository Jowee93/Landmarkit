import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField: {
    width: "100%"
  },
  toolbar: {
    backgroundColor: "#9FF5EC",
    color: "grey"
  }
}));

export default function TopBackNav() {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={handleBack}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
