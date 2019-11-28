import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Card, CardTitle, CardText, CardDeck } from "reactstrap";

const useStyles = makeStyles(theme => ({
  container: {
    display: "block"
  },
  textField: {
    width: "100%"
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let JWT = localStorage.getitem("userToken");

    let formData = new FormData();
    formData.append("fact", value);

    axios({
      method: "POST",
      url: "<PUT URL TO BACKEND>",
      header: { Authoriation: `Bearer${JWT}` },
      data: formData
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <CardDeck className="d-flex" style={{ height: "100vh" }}>
        <Card className="d-flex m-3" body outline color="danger">
          <form
            onSubmit={handleSubmit}
            className={classes.container}
            noValidate
            autoComplete="off"
          >
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
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit" variant="outlined" color="primary">
                Add new fact
              </Button>
            </div>
          </form>
        </Card>
      </CardDeck>
    </div>
  );
}
