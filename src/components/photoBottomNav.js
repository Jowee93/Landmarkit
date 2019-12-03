import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoIcon from "@material-ui/icons/Info";
import PostAddIcon from "@material-ui/icons/PostAdd";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Container } from "reactstrap";
import Drawer from "@material-ui/core/Drawer";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import Bootstrap from "react-bootstrap";
import GoogleMapComponent from "./googleMapComponent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import axios from "axios";
import { funfacts } from "./factsDataset";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "black"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    opacity: "0.7"
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    color: "#ffd5d5"
  }
}));

const buttonStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

export default function PhotoBottomNav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState("recents");
  const [facts, setFacts] = React.useState([]);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [show, setShow] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    let JWT = localStorage.getItem("userToken");
    axios({
      method: "GET",
      url: `https://lamppost.herokuapp.com/api/v1/images/${props.image_id}/facts`,
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(response => {
        console.log("Get Image Facts axios called:");
        console.log(response.data);
        setFacts(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const addFact = () => {
    history.push({
      pathname: `/image/${props.image_id}/newfact`,
      state: {
        image_id: `${props.image_id}`
      }
    });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Container style={{ height: "35vh" }}>
        <h1
          className="m-3"
          style={{
            position: "absolute",
            display: "block",
            Index: "10",
            backgroundColor: "white",
            width: "100%",
            fontFamily: "Josefin Sans, sans-serif"
          }}
        >
          Did you know ?
        </h1>
        <div style={{ height: "10vh" }}></div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                  className="card-title"
                >
                  General Information
                </h5>
                <p
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                  className="card-text"
                >
                  {props.image.description}
                </p>
                {/* <a href="/" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <Fab
          id="FactButton"
          style={buttonStyle}
          className={classes.fab}
          color="primary"
          aria-label="add"
          label="Add new facts"
          onClick={addFact}
        >
          <AddIcon />
        </Fab>

        {facts.map((fact, index) => (
          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{fact.title}</h5>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Josefin Sans, sans-serif" }}
                  >
                    {fact.text}
                  </p>
                  <span className="float-right">
                    <small>{fact.username}</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={buttonStyle}
          onClick={addFact}
        >
          New fact
        </Button> */}
      </Container>
    </div>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div style={{ width: "100vw" }} className="d-flex justify-content-between">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={toggleDrawer("bottom", true)}
          label="Did you know?"
          icon={<InfoTwoToneIcon />}
          className={classes.icon}
        />
        {/* <BottomNavigationAction
          label="Post"
          icon={<PostAddIcon />}
          className={classes.icon}
        /> */}
        <BottomNavigationAction
          onClick={handleShow}
          label="Nearby"
          icon={<LocationOnIcon />}
          className={classes.icon}
        />
      </BottomNavigation>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {fullList("bottom")}
      </Drawer>
      <Modal style={{ zIndex: "50" }} show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle style={{ fontFamily: "Josefin Sans" }}>
            Places Nearby !
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <GoogleMapComponent position={props.image}></GoogleMapComponent>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
