import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

// class NavbarComponent extends React.Component {
export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Profile"
          value="Profile"
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Upload"
          value="Upload"
          icon={<AddCircleIcon />}
        />
        <BottomNavigationAction
          label="Add"
          value="Add"
          icon={<PersonAddIcon />}
        />
        <BottomNavigationAction
          label="Notifications"
          value="notifications"
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </>
  );
}
