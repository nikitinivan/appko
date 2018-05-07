import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import InputComponent from './InputComponent';
import MarkerComponent from './MarkerComponent';

import axios from 'axios';
import Geocode from "react-geocode";

const APIKEY = 'AIzaSyA7uc78mkXe7qStTFXSTiqcGXPQg-0LD1Y'
Geocode.setApiKey(APIKEY);



class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            center: {
                lat: props.latitude,
                lng: props.longitude
            },
            zoom: 14
        };
    }

    componentWillMount() {
        this.getGeocode(this.state.center.lat, this.state.center.lng)
    }
    


    getGeocode(lat, lng) {
        return Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({ address: address })
            },
            error => {
                console.error(error);
            }
        );
    }
    handleClick = () => {
        axios.post('http://127.0.0.1:8000/calltow/', {
            latitude: this.state.center.lat,
            longitude: this.state.center.lng,
            address: this.state.address
          })
          .then(function (response) {
            console.log(response.data.message);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    render() {
        return (
            // Important! Always set the container height explicitly
            <div>
                <div className="ui center aligned map" style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: APIKEY }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >

                        <MarkerComponent lat={this.state.center.lat} lng={this.state.center.lng} text={'A'} />

                    </GoogleMapReact>
                </div>
                <InputComponent
                    location={this.state.address}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default SimpleMap;