import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  }
}));

export default function Inputs(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.container}>
      <Input
        value={props.location.data}
        className={classes.input}
        inputProps={{
          "aria-label": "description"
        }}
      />

      <img src=""></img>
      <NavbarComponent></NavbarComponent>
    </div>
  );
}
