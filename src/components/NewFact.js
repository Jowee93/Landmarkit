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
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  const history = useHistory();

  const handleChangeText = event => {
    setText(event.target.value);
  };

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let JWT = localStorage.getItem("userToken");
    // let userData = localStorage.getItem("userData");

    // let username = userData.username;

    // let formData = new FormData();
    // formData.append("text", value);
    // formData.append("title", title);

    await axios({
      method: "POST",
      url: `https://lamppost.herokuapp.com/api/v1/images/${location.state.image_id}/newfact`,
      headers: { Authorization: `Bearer ${JWT}` },
      data: { text, title }
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
                label="Title !"
                fullWidth
                placeholder="Title !"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={handleChangeTitle}
              />
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
                onChange={handleChangeText}
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
