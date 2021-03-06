export const markerActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
  }

  export const addMarker = (values) => (dispatch) => {
    return dispatch({ type: markerActionTypes.ADD, values })
  }
  
  export const removeMarker = (values) => (dispatch) => {
    return dispatch({ type: markerActionTypes.DELETE, values })
  }
  
