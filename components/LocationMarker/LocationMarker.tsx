
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
                position={item}
                onClick={() => handleActiveMarker(index)}
              > 
            {activeMarker === index ?  (<InfoWindow key={index} onCloseClick={() => handleActiveMarker(null)}>
                <div className="flex-col justify-items-center">
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded mt-5" onClick={addDetails} name="remove marker"> Remove Location</button> <br />
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded mt-5"  name="Add details"> Add Details </button>
                   {/* <p> item: {item.latLng}</p> */}
            </div>
            </InfoWindow>) : null}
            </Marker>
            ))}
        </Fragment>
    )
}

export default LocationMarker;

// const mapStateToProps = (state) => ({
//   location : state.locationDetails.location,
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addLocation: bindActionCreators(addLocation, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LocationMarker)