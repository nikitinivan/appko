import React from 'react';
import {geolocated} from 'react-geolocated';
import MapComponent from './MapComponent';

class Demo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? 
          <div className="ui container">
            
            <MapComponent 
            latitude={this.props.coords.latitude}
            longitude={this.props.coords.longitude}
            
            />
          </div>
        
          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);