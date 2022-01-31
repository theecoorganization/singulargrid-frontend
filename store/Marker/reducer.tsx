import { markerActionTypes } from './action'


export default function reducer(state = [], action) {
  switch (action.type) {
    case markerActionTypes.ADD:
        return [...state, action.values]    
    case markerActionTypes.DELETE:
        return [...state.filter(item => item != action.values)]
        
    default:
      return state
  }
}