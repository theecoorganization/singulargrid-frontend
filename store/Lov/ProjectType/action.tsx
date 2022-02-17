import instance from "api/request";

export const projectTypeTypes = {
    ADD: 'PROJECT_TYPE_ADD',
    GET: 'PROJECT_TYPE_GET'
  }

  export const addProjectType = (values) => (dispatch) => {
    return dispatch({ type: projectTypeTypes.ADD, values })
  }

  export const getProjectTypes = (values) => async (dispatch) => {
    const response = await instance.get('/projectType/');
    return dispatch({ type: projectTypeTypes.GET, values: response.data })
  }
