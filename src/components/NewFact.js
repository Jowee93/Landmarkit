import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "react-bootstrap/Modal";
const useStyles = makeStyles(theme => ({
  container: {
    display: "block",
    height: "100vh"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Fun Fact !"
          fullWidth
          multiline
          rows="10"
          placeholder="Share your facts !"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="outlined" color="primary">
          Add new fact
        </Button>
      </div>
    </form>
  );
}
