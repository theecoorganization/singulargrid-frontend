export const locationActionTypes = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
  }

  export const addLocation = (values) => (dispatch) => {
    return dispatch({ type: locationActionTypes.ADD, values })
  }

  export const updateLocation = () => (dispatch) => {
    return dispatch({ type: locationActionTypes.UPDATE })
  }

  export const deleteLocation = () => (dispatch) => {
    return dispatch({ type: locationActionTypes.DELETE })
  }