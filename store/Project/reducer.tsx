import {projectActionTypes} from './action'


export default function reducer(state = [], action) {
  switch (action.type) {
    case projectActionTypes.GET:
        return [...action.payload]
    default:
      return state
  }
}