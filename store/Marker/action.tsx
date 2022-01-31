export const markerActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE',
  }

  export const addMarker = (values) => (dispatch) => {
    return dispatch({ type: markerActionTypes.ADD, values })
  }
  
  