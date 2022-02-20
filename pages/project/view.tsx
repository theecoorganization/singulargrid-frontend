import ListBar from "@/components/ListBar/ListBar";
import ProjectInfo from '@/components/ProjectInfo/ProjectInfo';
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from 'store/Project/action';


const ViewProject = ({getProjects,projects}) => {

    useEffect(()=> {
        getProjects();
    },[])

    return (
        <div className="container lg">
            <div className="flex">
                <div className="w-1/4 m-12">
                    <ListBar />
                </div>
                <div className="w-2/4">
                    {projects ? projects.map((item) => (
                         <ProjectInfo key={item} name={item.name} type={item.projectType} manager={item.projectManager} description={item.description} />
                    )): (<h3>Oops,No projects to show!</h3>)}
                        </div>
                    </div>
                </div>
    )
}

const mapStateToProps = (state) => ({
    projects : state.projectDetails,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getProjects: bindActionCreators(getProjects, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)
