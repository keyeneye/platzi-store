import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = (location) => {
    const lat = Number(parseFloat(location.data.latitude));
    const lng = Number(parseFloat(location.data.longitude));
    const mapStyles = {
        height: "50vh",
        width: "100%"
    }
    
    const defaultCenter = {
        lat,
        lng
    }
    console.log(defaultCenter);
    return (
        <LoadScript googleMapsApiKey='AIzaSyBkfFFrdSWTOgtah2NO99uUFSb3kdVhI7Q'>
            <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>

    )
}

export default Map
