import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import LocationMarker from "@/components/LocationMarker/LocationMarker"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMarker,removeMarker } from "../../store/Marker/action"


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9T3Fdfpli_tBXzwIWBzf0KW6SRF8le5k&v=3.exp&map_ids=3a3b44abd7aea59f",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vw` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
withScriptjs,
withGoogleMap
)((props) => 
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 5.758419, lng: 73.320568 }}
        mapTypeId={props.editable ? 'terrain' : 'hybrid'}
        onClick={(e) => {
          props.addMarker(e.latLng);
        }}
      > 
       {props.markers &&  <LocationMarker markers={props.markers} editable={props.editable}/>}
      </GoogleMap>);


const mapDispatchToProps = (dispatch) => {
  return {
    addMarker: bindActionCreators(addMarker, dispatch),
    removeMarker: bindActionCreators(removeMarker, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Map)