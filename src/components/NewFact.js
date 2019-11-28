import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <div className={classes.root}>
          <Button variant="outlined" color="secondary">
            Add New Fact
          </Button>
        </div>
      </div>
    </div>
  );
}
