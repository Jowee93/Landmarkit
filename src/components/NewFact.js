import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Card, CardDeck } from "reactstrap";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import TopBackNav from "./topBackNav";

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
  const location = useLocation();
  const history = useHistory();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let JWT = localStorage.getItem("userToken");

    let formData = new FormData();
    formData.append("fact", value);

    await axios({
      method: "POST",
      url: `http://172.20.10.8:5000/api/v1/images/${location.state.image_id}/newfact`,
      header: { Authoriation: `Bearer${JWT}` },
      data: formData
    })
      .then(response => {
        console.log("Add fact axios is called:");
        console.log(response);
        history.goBack();
      })
      .catch(error => {
        console.log(error.response);
        history.goBack();
      });
  };

  return (
    <div>
      <TopBackNav></TopBackNav>
      <CardDeck className="d-flex" style={{ height: "100vh" }}>
        <Card className="d-flex m-3 p-3 shadow">
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
