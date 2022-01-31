
import { Fragment, useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";
import { useRouter } from "next/dist/client/router";




const LocationMarker = ({markers}) => {
    const router = useRouter();
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    const addDetails = () => {
      router.push('/admin/new');
    }

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
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addDetails} name="remove marker"> Remove Marker</button> <br />
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  name="Add details"> Add Details </button>
            </div>
            </InfoWindow>) : null}
            </Marker>
            ))}
        </Fragment>
    )
}

export default LocationMarker;