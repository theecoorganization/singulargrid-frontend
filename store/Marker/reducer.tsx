import { markerActionTypes } from './action'

const marker = {
    marker : []
}

export default function reducer(state = marker, action) {
  switch (action.type) {
    case markerActionTypes.ADD:
        return {
            ...state,
            marker: [...state.marker, action.values]
        }

    default:
      return state
  }
}