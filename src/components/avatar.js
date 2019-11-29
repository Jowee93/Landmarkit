import React, { useState, useCallback, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ninja_avatar from "./ninja_avatar.png";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function UserPic() {
  const classes = useStyles();
  const [profileImage, setProfileImage] = useState([]);

  useEffect(() => {
    // $("img").addClass("GalleryImage");
    let JWT = localStorage.getItem("userToken");

    axios({
      method: "GET",
      url: "http://192.168.0.167:5000/api/v1/users/me",
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(result => {
        console.log("Avatar axios called:");
        console.log(result.data);
        setProfileImage(result.data.profileImage);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="d-flex justify-content-end p-3">
      <Avatar
        component={Link}
        to="/myprofile"
        alt="Avatar-holder"
        src={profileImage}
        className={classes.bigAvatar}
      ></Avatar>
    </div>
  );
}
