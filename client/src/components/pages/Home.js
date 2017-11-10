import React from "react";
import { Grid } from "semantic-ui-react";
import MapComponent from "../map/MapComponent";

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <h1>Warsaw Tourism</h1>
        </Grid.Column>
        <Grid.Column width={10}>
          <MapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
