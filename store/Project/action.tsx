import instance from "api/request"

export const projectActionTypes = {
    GET: 'GET'
  }

  export const getProjects = () => async (dispatch) => {
    const response = await instance.get("/project");
    console.log(response.data);
    return dispatch({ type: projectActionTypes.GET, payload: response.data })
  }

 