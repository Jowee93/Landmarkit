import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
  display: "block"
};

class GoogleMapComponent extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
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

  render() {
    return (
      <div style={{ position: "relative", width: "100vw", height: "30vh" }}>
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(GoogleMapComponent);
