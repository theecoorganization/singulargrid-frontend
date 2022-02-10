import React, { Fragment, useEffect } from "react";
import MapView from "@/components/Map/Map";
import { connect } from 'react-redux';



const ExploreMap = ({markers}) => {
    console.log(markers);
    return (
        <Fragment>
            <MapView markers={markers} editable={true}></MapView>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    markers : state.marker,
})
  
export default connect(mapStateToProps, null)(ExploreMap)
