
import { Fragment, useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";
import { useRouter } from "next/dist/client/router";




const LocationMarker = ({removeMarker, markers}) => {
    const router = useRouter();
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    const addDetails = (item) => {
      router.push(`/admin/addProject?lat=${item.lat()}&lng=${item.lng()}`);
    }

    return (
        <Fragment>
        {markers && markers.map((item,index) => (
            <Marker
                key={item.lng()}
                position={item}
                onClick={() => handleActiveMarker(index)}
              > 
            {activeMarker === index ?  (<InfoWindow key={index} onCloseClick={() => handleActiveMarker(null)}>
                <div className="flex-col justify-items-center">
                   {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded mt-5" onClick={() => removeMarker(item)} name="remove marker"> Remove Location</button> <br /> */}
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded mt-5" onClick={()=> addDetails(item)}  name="Add details"> Add Details </button>
            </div>
            </InfoWindow>) : null}
            </Marker>
            ))}
        </Fragment>
    )
}

export default LocationMarker;