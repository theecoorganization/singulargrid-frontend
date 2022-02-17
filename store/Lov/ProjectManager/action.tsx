import instance from "api/request"

export const projectManagerTypes = {
    ADD: 'PROJECT_MANAGER_ADD',
    GET: 'PROJECT_MANAGER_GET'
  }

  export const addProjectManager = (values) => (dispatch) => {
    return dispatch({ type: projectManagerTypes.ADD, values })
  }

  export const getProjectManagers =  () => async (dispatch) => {
    const response = await instance.get('/projectManager/');
    return dispatch({ type: projectManagerTypes.GET, values: response.data })
  }
