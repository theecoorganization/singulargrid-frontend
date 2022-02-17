import { projectTypeTypes } from './action'


export default function reducer(state = [], action) {
  switch (action.type) {
    case projectTypeTypes.GET:
        return [...action.values]
        
    default:
      return state
  }
}