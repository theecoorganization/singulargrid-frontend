import { Map, GoogleApiWrapper } from 'google-maps-react';
import { FunctionComponent, useState } from "react";

interface GoogleMap {
    google : string,
}

const MapView: FunctionComponent<GoogleMap> = ({google}) => {
    const [position, setPosition] = useState({
        latitude: 4.1750,
        longitude: 73.5089
    });

    return (
        <Map
          google={google}
          initialCenter={{ lat: position.latitude, lng: position.longitude}}
        />
    );
};

export default GoogleApiWrapper({
    apiKey: 'YOUR_API_KEY'
  })(MapView);
