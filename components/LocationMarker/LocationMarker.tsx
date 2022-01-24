
import { Fragment, useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";

const LocationMarker = ({markers}) => {
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    return (
        <Fragment>
        {markers.map((item,index) => (
            <Marker
                key={index}
                position={item.latLng}
                onClick={() => handleActiveMarker(index)}
              > 
            {activeMarker === index ?  (<InfoWindow key={index} onCloseClick={() => handleActiveMarker(null)}>
                <div>
                    <h2>Latitude: </h2>
                    <h2>Longitude: </h2>
            </div>
            </InfoWindow>) : null}
            </Marker>
            ))}
        </Fragment>
    )
}

export default LocationMarker;