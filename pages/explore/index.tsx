import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import MapView from "@/components/Map/Map";
import { getProjects } from 'store/Project/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ExploreMap = ({getProjects}) => {
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        getMarkers();
    },[]);

    const getMarkers = async () => {
        const response = await getProjects();
        if(response.payload) {
            response.payload.map((item) => {
                setMarkers((prev) => [...prev, item.location])
            })
        }
    };

    return (
        <Fragment>
            <MapView markers={markers} editable={false}></MapView>
        </Fragment>
    );
};


const mapStateToProps = (state) => ({
    projects : state.projectDetails,
  })
  
const mapDispatchToProps = (dispatch) => {
    return {
      getProjects: bindActionCreators(getProjects, dispatch),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ExploreMap)

