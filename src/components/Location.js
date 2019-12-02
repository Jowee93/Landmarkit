import React from "react";
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
  const [location, setLocation] = React.useState(props.data);

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
      <Gallery photos={location}   />
      <NavbarComponent></NavbarComponent>
    </div>
  );
}
