import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import LocationMarker from "@/components/LocationMarker/LocationMarker"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMarker,removeMarker } from "../../store/Marker/action"


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_vRLuKmR5-gjWfzfk7I6mvDoNZAz8P2o&v=3.exp&map_ids=3a3b44abd7aea59f",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vw` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
withScriptjs,
withGoogleMap
)((props) => 
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 4.1755, lng: 73.5093 }}
        onClick={(e) => {
          props.addMarker(e.latLng);
        }}
      >    
       {props.markers &&  <LocationMarker  removeMarker={(item) => props.removeMarker(item)} markers={props.markers} />}
      </GoogleMap>);



const mapStateToProps = (state) => ({
  markers : state.marker,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addMarker: bindActionCreators(addMarker, dispatch),
    removeMarker: bindActionCreators(removeMarker, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)