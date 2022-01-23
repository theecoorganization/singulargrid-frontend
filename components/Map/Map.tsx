import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps"
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
import Image from "next/image";
import { Fragment, useState } from "react";

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
    onToggleOpen: ({ isOpen, markers }) => (e) => {
        console.log("coming open"+ JSON.stringify(e));
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
          {props.markers.map(marker => (
            <Marker
              key={marker}
              position={marker.latLng}
              onClick={props.onToggleOpen}
            > 
             <PopOver isOpen={props.isOpen} markerInfo={marker}/>
            </Marker>

          ))}
      </GoogleMap>)
;

const PopOver = ({isOpen, markerInfo}) => {
    const [, setIsOpen] = useState(false);
    console.log("markerInfo,"+ markerInfo)
    return (
        <Fragment>
            {isOpen &&  <InfoWindow onCloseClick={() => setIsOpen(false)}>
                <div>
                    <h2>Latitude: </h2>
                    <h2>Longitude: </h2>
                    <button className=""  name="connect">Swap</button>
            </div>
            </InfoWindow>}  
    </Fragment>)
} 


export default MyMapComponent;