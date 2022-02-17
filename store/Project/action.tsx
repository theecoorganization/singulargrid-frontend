import instance from "api/request"

export const projectActionTypes = {
    GET: 'PROJECT_GET'
  }

  export const getProjects = () => async (dispatch) => {
    console.log("coming ehre")
    const response = await instance.get("/project");
    return dispatch({ type: projectActionTypes.GET, payload: response.data })
  }

 