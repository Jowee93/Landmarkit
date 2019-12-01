import React, { useState } from "react";
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
  const handleSubmit = () => {
    props.history.push({
      pathname: "/searchlocation",
      data: searchInput 
    });
  };
  console.log(category);
  return (
    <div>
      <div className="m-3">
        <button onClick={() => handleSubmit()}>submit</button>
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
                    {" — adventures at #joanax…"}
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </Card>

      <Card className="m-3 shadow">
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
      </Card>

      <NavbarComponent></NavbarComponent>
    </div>
  );
}
