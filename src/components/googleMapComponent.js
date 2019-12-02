import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
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
      ll: "3.1461,101.6255",
      limit: 3,
      radius: 5000,
      client_secret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET,
      client_id: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
      v: "20191202"
    };

    axios
      .get(
        `https://api.foursquare.com/v2/venues/explore?` +
          new URLSearchParams(parameters)
      )
      .then(Response => {
        // console.log(Response.data.Response.groups[0].items)
        console.log("data", Response.data);
        this.setState({
          places: Response.data.response.groups[0].items
        });
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
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat:3.1461, lng:101.6255}}
          >
            {
              this.state.places.map((place, index) => {
                return(
                  <Marker
                    key={index}
                    onClick={this.onMarkerClick}
                    position={{lat: place.venue.location.lat , lng: place.venue.location.lng}}
                    name={place.venue.name}
                  />
                )
              })
            }

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace && this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
          {/* <div style={{position: 'absolute', top: '100%'}}>
            {this.state.activeMarker && this.state.activeMarker.name}
          </div> */}
          </div>
          </Container>

          {this.state.places.map(place => (
            <div 
            // style={{display : this.state.activeMarker.name == place.venue.name ? "" : "hidden"}}
            >
                
                  
                 {/* {this.state.activeMarker} */}
                  
              <h1>
                {place.venue.location.formattedAddress}
                <img href={place.venue.categories.icon.prefix} />
                
                </h1>
            </div>
          ))}
      </>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: (process.env.REACT_APP_GOOGLE_MAP_API)
})(GoogleMapComponent);
