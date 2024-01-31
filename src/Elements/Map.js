import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
    const mapStyles = {
        width: '100%',
        height: '45%',
        borderRadius: '48px', // curves map
    };
    return (
        <Map 
        google={props.google}
        zoom={15} // sets map starting zoom level
        style = {mapStyles}
        initialCenter={{ lat: 55.911973244335115, lng: -3.319442689166232}}  // GRID buidling pos
        streetViewControl={false}  // Disables Street View        
        fullscreenControl={false} // Disables fullscreen button
        >
            <Marker position ={{ lat: 55.911973244335115, lng: -3.319442689166232}} />            
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // restricted to map use only
})(MapContainer);