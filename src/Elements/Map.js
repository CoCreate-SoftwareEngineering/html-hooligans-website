import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
    const mapStyles = {
        width: '100%',
        height: '45%',
    };
    return (
        <Map 
        google={props.google}
        zoom={15}
        style = {mapStyles}
        initialCenter={{ lat: 55.911973244335115, lng: -3.319442689166232}}  // GRID buidling pos
        >
            <Marker position ={{ lat: 55.911973244335115, lng: -3.319442689166232}} />            
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCkQ7JE59-lMigZL9i-jKn9j7jCQTyqZIM'
})(MapContainer);