import instance from "api/request"

export const projectActionTypes = {
    GET: 'GET'
  }

  export const getProjects = () => async (dispatch) => {
    const response = await instance.get("/project");
    return dispatch({ type: projectActionTypes.GET, payload: response.data })
  }

 