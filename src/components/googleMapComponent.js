import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../components/css/googleMap.css";

// const markers = {
//          "groups": [
//              {
//                  "items": [{
//                      "venue": {
//                          "name": "",
//                          "location": {
//                              "lat": "",
//                              "lng": ""
//                          }
//                      }
//                  }]
//              }
//          ]
//     };

const mapStyles = {
  width: "100%",
  height: "100%",
  display: "block"
};

class GoogleMapComponent extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: undefined, //Shows the active marker upon click
    selectedPlace: undefined, //Shows the infoWindow to the selected place upon a marker
    places: [],
    info: []
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

  componentDidMount() {
    const parameters = {
      section: "outdoors",
      // near: "Penang",
      ll: this.props.position.latitude + "," + this.props.position.longitude,
      limit: 3,
      radius: 5000,
      client_secret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
      client_id: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
      v: "20191203"
    };

    axios
      .get(
        `https://api.foursquare.com/v2/venues/explore?` +
          new URLSearchParams(parameters)
      )
      .then(Response => {
        // console.log(Response.data.Response.groups[0].items)
        console.log("data", Response.data);
        console.log("data", Response.data.response.groups[0].items);
        this.setState({
          places: Response.data.response.groups[0].items
        });
        console.log(
          "data",
          Response.data.response.groups[0].items[0].venue.categories[0].icon
            .prefix +
            Response.data.response.groups[0].items[0].venue.categories[0].icon
              .suffix
        );
      })
      .catch(error => {
        console.log("ERROR! " + error);
      });

    // axios.post(
    //   `https://api.foursquare.com/v2/venues/explore?` +
    //     new URLSearchParams(parameters)
    // )
    // .then(response => {
    //   console.log("infos", response.data.response.groups[0].items[0].reasons)
    // })
    console.log(this.props.position.latitude);
  }

  render() {
    return (
      <>
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
              zoom={15}
              style={mapStyles}
              initialCenter={{
                lat: this.props.position.latitude,
                lng: this.props.position.longitude
              }}
            >
              {this.state.places.map((place, index) => {
                return (
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{
                      lat: place.venue.location.lat,
                      lng: place.venue.location.lng
                    }}
                    name={place.venue.name}
                  />
                );
              })}

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>
                    {this.state.selectedPlace && this.state.selectedPlace.name}
                  </h4>
                </div>
              </InfoWindow>
            </Map>
            {/* <div style={{position: 'absolute', top: '100%'}}>
          <div style={{ position: "absolute", top: "100%" }}>
            {this.state.activeMarker && this.state.activeMarker.name}
          </div> */}
          </div>
        </Container>

        {this.state.places.map(place => {
          if (
            this.state.activeMarker &&
            place.venue.name === this.state.activeMarker.name
          ) {
            return (
              <div
                // style={{display : this.state.activeMarker.name == place.venue.name ? "" : "hidden"}}
                className="card"
              >
                <div className="container">
                  <h4>{place.venue.name}</h4>
                  {/* <img
                        src={
                          place.venue.categories[0].icon.prefix +
                          88 +
                          place.venue.categories[0].icon.suffix
                        }
                      /> */}
                  <span>
                    {place.venue.location.address}{" "}
                    {place.venue.location.crossStreet},{" "}
                    {place.venue.location.postalCode},{" "}
                    {place.venue.location.city} {place.venue.location.street}{" "}
                    {place.venue.location.country}{" "}
                  </span>
                  <div className="innerContainer">
                    {place.venue.categories[0].pluralName}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_GOOGLE_MAP_API)
})(GoogleMapComponent);
