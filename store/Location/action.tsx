export const locationActionTypes = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
  }
  
  export const addLocation = () => (dispatch) => {
    return dispatch({ type: locationActionTypes.ADD })
  }

  export const updateLocation = () => (dispatch) => {
    return dispatch({ type: locationActionTypes.UPDATE })
  }

  export const deleteLocation = () => (dispatch) => {
    return dispatch({ type: locationActionTypes.DELETE })
  }