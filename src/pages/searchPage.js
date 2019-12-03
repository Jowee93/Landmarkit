import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { MDBCol } from "mdbreact";
import ButtonToolbar from "react";
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Form
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Superman from "../components/superman.png";
import Joana from "../components/yq.jpg";
import { Card } from "reactstrap";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function SearchPage(props) {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState(""); 
  const [category, setCategory] = useState("");
  const [userResult, setUserResult] = useState([]);
  const [locationResult, setLocationResult] = useState([]);

  const history = useHistory();

  const handleSubmit = () => {
    if (category == "User") {
      let searchstring = searchInput;
      let formData = new FormData();
      formData.append("searchInput", searchInput);
      console.log(searchstring);
      axios({
        method: "POST",
        url: "https://lamppost.herokuapp.com/api/v1/users/search",
        data: formData
      })
        .then(response => {
          console.log("Search User axios is called:");
          console.log(response.data);
          setUserResult(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      let placename = searchInput;
      let formData = new FormData();
      formData.append("placename", searchInput);
      console.log(placename);

      axios({
        method: "POST",
        url: "https://lamppost.herokuapp.com/api/v1/images/search",
        data: formData
      })
        .then(response => {
          console.log("Search location axios is called:");
          console.log(response.data);
          setLocationResult(placename);
          history.push({
            pathname: "/searchlocation",
            state: {
              placename: response.data
            }
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  };
  // console.log(category);
  return (
    <div>
      <div className="m-3">
        <InputGroup>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <Form.Group controlId="exampleForm.ControlSelect1">
            {/* <Form.Label>Example select</Form.Label> */}
            <Form.Control
              as="select"
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Search by</option>
              <option value="User">User</option>
              <option value="Location">Location</option>
            </Form.Control>
          </Form.Group>
          {/* <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Search by..."
            id="input-group-dropdown-2"
            onChange={e => console.log(e.target)}
          >
            <Dropdown.Item href="#">User</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Location</Dropdown.Item>
          </DropdownButton> */}
        </InputGroup>
        <button className="btn btn-info" onClick={() => handleSubmit()}>
          Search
        </button>
      </div>
      <Card className="m-3 shadow">
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="#" src={Joana} />
            </ListItemAvatar>
            <ListItemText
              primary="@Joana"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {" — adventures at #joanaxjapan…"}
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </Card>

      {userResult.map((user, index) => (
        <Card className="m-3 shadow">
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="#" src={user.profileImage} />
              </ListItemAvatar>
              <ListItemText
                primary={user.username}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {user.description}
                    </Typography>
                  </React.Fragment>
                }
              ></ListItemText>
            </ListItem>
          </List>
        </Card>
      ))}

      {/* <Card className="m-3 shadow">
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="#" src={Superman} />
            </ListItemAvatar>
            <ListItemText
              primary="@Jowee"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {" — damn nice to travel weih"}
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </Card> */}

      <NavbarComponent></NavbarComponent>
    </div>
  );
}
