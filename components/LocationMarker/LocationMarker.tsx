
import { useRouter } from "next/dist/client/router";
import { Fragment, useState } from "react";
import { InfoWindow, Marker } from "react-google-maps";


const LocationMarker = ({markers, editable}) => {
    const router = useRouter();
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };

    const addDetails = (item) => {
      router.push(`/project/add?lat=${item.lat()}&lng=${item.lng()}`);
    }

    const onlyView = () => {
      return (
        <Fragment>
           {markers && markers.map((item,index) => (
          <Marker
              key={index}
              position={{lat: parseFloat(item.location.lat), lng: parseFloat(item.location.lng)}}
              onClick={() => handleActiveMarker(index)}
            > 
              {activeMarker === index ?  (<InfoWindow key={index} onCloseClick={() => handleActiveMarker(null)}>
                <h6>{item.projectType} - {item.description}</h6>
            </InfoWindow>) : null}

          </Marker>
          ))}
        </Fragment>
       
      )
    }

    const updateView = () => {
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded" onClick={()=> addDetails(item)}  name="Add details"> Add Details </button>
            </div>
            </InfoWindow>) : null}
            </Marker>
            ))}
        </Fragment>
      )
    }

    return (
        <Fragment>
          {editable ? updateView() : onlyView() }
        </Fragment>
    )
}

export default LocationMarker;