import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ImageIcon from "@material-ui/icons/Image";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import UploadButtons from "./uploadComponent";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

export default function NavbarComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          component={Link}
          to="/myprofile"
          label="Profile"
          icon={<AccountCircleIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/search"
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />
        <UploadButtons></UploadButtons>

        <BottomNavigationAction
          component={Link}
          to="/main"
          label="Gallery"
          value="gallery"
          icon={<ImageIcon />}
        />

        <BottomNavigationAction
          label="Notifications"
          value="notifications"
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
