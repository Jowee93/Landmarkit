import React from "react";
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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
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

// class NavbarComponent extends React.Component {
export default function PhotoBottomNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState("recents");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const [show, setShow] = React.useState(false);

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
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={buttonStyle}
        >
          Add new fact
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
          icon={<InfoIcon />}
        />
        <BottomNavigationAction label="Post" icon={<PostAddIcon />} />
        <BottomNavigationAction
          onClick={handleShow}
          label="Nearby"
          icon={<LocationOnIcon />}
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
