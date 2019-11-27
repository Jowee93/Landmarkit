import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ninja_avatar from "./ninja_avatar.png";

export default function userPic() {
  return (
    <div className="d-flex justify-content-end p-3">
      <Avatar alt="Avatar-holder" src={ninja_avatar}></Avatar>
    </div>
  );
}
