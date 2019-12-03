import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Gallery from "react-photo-gallery";

const useStyles = makeStyles(theme => ({
  input: {
    margin: theme.spacing(1)
  }
}));

export default function Inputs(props) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [location, setLocation] = React.useState(
    props.history.location.state.placename
  );
  const [images, setImages] = useState([]);
  const history = useHistory();
  console.log(props.history.location.state.placename);

  const openLightbox = useCallback((event, { photo, index }) => {
    // setCurrentImage(index);
    setCurrentImage(photo.id);
    console.log(`Clicked photo id: ${photo.id}`);
    // console.log(photo);
    // console.log(photo.src);
    // console.log(index);
    history.push({
      pathname: `/photo/${photo.id}`,
      state: {
        currentImage: photo.src,
        description: photo
      }
    });

    // setViewerIsOpen(true);
  }, []);

  return (
    <div className={classes.container}>
      <Input
        value={props.location.data}
        className={classes.input}
        inputProps={{
          "aria-label": "description"
        }}
      />
      <Gallery photos={location} onClick={openLightbox} />
      <NavbarComponent></NavbarComponent>
    </div>
  );
}
