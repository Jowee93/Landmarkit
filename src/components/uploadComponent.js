import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Redirect } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

export default function UploadButtons() {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const history = useHistory();

  const handleSubmit = async e => {
    setCurrentImage(URL.createObjectURL(e.target.files[0]));

    e.preventDefault();

    let formData = new FormData();

    formData.append("user_image", e.target.files[0]);
    formData.append("user_id", 31);

    e.persist();

    await axios({
      method: "POST",
      url: "http://localhost:5001/api/v1/users/json",
      data: formData
    })
      .then(response => {
        console.log(response.data[0]);
        setDescription(response.data[0].description);
        if (response) {
          history.push({
            pathname: `/photo/${response.data[0].id}`,
            state: {
              currentImage: URL.createObjectURL(e.target.files[0]),
              description: response.data[0]
            }
          });
        } else {
          console.log("Failed");
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleSubmit}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          size="small"
          className="pb-3"
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
