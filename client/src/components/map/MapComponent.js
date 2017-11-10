import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class MapComponent extends React.Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 52.2297, lng: 21.0122 }}
        >
          {this.props.isMarkerShown && (
            <Marker position={{ lat: 52.2297, lng: 21.0122 }} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(MapComponent));
