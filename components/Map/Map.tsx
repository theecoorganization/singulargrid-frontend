import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import LocationMarker from "@/components/LocationMarker/LocationMarker"


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_vRLuKmR5-gjWfzfk7I6mvDoNZAz8P2o&v=3.exp&map_ids=3a3b44abd7aea59f",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vw` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    markers : [],
    isMarkerShown: false,
    markerPosition: null,
  }), {
    onMapClick: ({ markers }) => (e) => {
       markers[markers.length] = e;
       return  ({
        markerPosition: e.latLng,
        isMarkerShown:true
    })},
    onToggleOpen: ({ isOpen }) => (e) => {
        return ({
            isOpen: !isOpen,
          })}
        }),
withScriptjs,
withGoogleMap
)((props) => 
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -33.91722, lng: 151.23064 }}
        onClick={(e) => props.onMapClick(e)}
      >    
        <LocationMarker markers={props.markers} />
      </GoogleMap>)
;

export default MyMapComponent;