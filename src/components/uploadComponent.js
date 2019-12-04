import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Loader from "../components/LoadingPage";
import Avatar from "../components/avatar";
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent";

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
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmit = async e => {
    // setIsLoading(true);
    setCurrentImage(URL.createObjectURL(e.target.files[0]));

    e.preventDefault();

    let formData = new FormData();

    formData.append("user_image", e.target.files[0]);
    formData.append("user_id", 31);

    e.persist();

    let JWT = localStorage.getItem("userToken");

    await axios({
      method: "POST",
      url: "https://lamppost.herokuapp.com/api/v1/users/json",
      data: formData,
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(response => {
        console.log(response.data[0]);
        setDescription(response.data[0].description);
        // setIsLoading(false);
        if (response) {
          history.push({
            pathname: `/photo/${response.data[0].id}`
            // state: {
            //   currentImage: URL.createObjectURL(e.target.files[0]),
            //   description: response.data[0]
            // }
          });
        } else {
          console.log("Failed");
        }
      })
      .catch(error => {
        console.log(error.response);
        // setIsLoading(false);
      });
  };

  // if (isLoading) {
  //   return (
  //     <>
  //       <Avatar></Avatar>
  //       <Loader />
  //       <NavbarComponent></NavbarComponent>
  //     </>
  //   );
  // }
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
