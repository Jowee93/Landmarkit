import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ninja_avatar from "./ninja_avatar.png";
import { Redirect, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function UserPic() {
  const classes = useStyles();
  return (
    <div className="d-flex justify-content-end p-3">
      <Avatar
        component={Link}
        to="/myprofile"
        alt="Avatar-holder"
        src={ninja_avatar}
        className={classes.bigAvatar}
      ></Avatar>
    </div>
  );
}
