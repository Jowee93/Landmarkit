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
// import Button from "react-bootstrap/Button";
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
    right: theme.spacing(2)
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
      url: `http://192.168.0.167:5000/api/v1/images/${props.photodescription.id}/facts`,
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
      pathname: `/image/${props.photodescription.id}/newfact`,
      state: {
        image_id: `${props.photodescription.id}`
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
          style={{
            position: "absolute",
            display: "block",
            Index: "10",
            backgroundColor: "white",
            width: "100%"
          }}
        >
          Did you know ?
        </h1>
        <div style={{ height: "10vh" }}></div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">General Information</h5>
                <p className="card-text">
                  Placeholder for general information from backend:
                  {props.photodescription.description}
                </p>
                {/* <a href="/" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {funfacts.map((fact, index) => (
          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Fact {index}</h5>
                  <p className="card-text">{fact.text}</p>
                  <span className="float-right">
                    <small>{fact.username}</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={buttonStyle}
          onClick={addFact}
        >
          New fact
        </Button>
        {/* <Fab
          style={buttonStyle}
          className={classes.fab}
          color="primary"
          aria-label="add"
          label="Add new facts"
        >
          <AddIcon />
        </Fab> */}
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
        <BottomNavigationAction
          label="Post"
          icon={<PostAddIcon />}
          className={classes.icon}
        />
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
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Google Maps !</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h4>Places Nearby</h4>
          <GoogleMapComponent></GoogleMapComponent>
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
