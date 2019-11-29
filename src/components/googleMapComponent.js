import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';

const mapStyles = {
  width: "100%",
  height: "100%",
  display: "block"
};

class GoogleMapComponent extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    foursquareData: [],
    lat: "",
    long= ""
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount(){
    const parameters = {
      query: "",
      near: "",
    }

    axios
      .get(`https://api.foursquare.com/v2/venues/explore?intent=browse&ll=${this.state.lat},${this.state.long}` + new URLSearchParams(parameters))
      .then(res => {
        // console.log(res.data.res.groups[0].items)
        console.log(res);
        this.setState({
          foursquareData: res
        })
      })
      .catch(error => {
        console.log("ERROR! " + error);
      })
  }


  render() {
    return (
      <Container className="d-flex justify-content-center">
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "50vh"
          }}
        >
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: 3.1574419999999996, lng: 101.711609 }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={"Kenyatta International Convention Centre"}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(GoogleMapComponent);
