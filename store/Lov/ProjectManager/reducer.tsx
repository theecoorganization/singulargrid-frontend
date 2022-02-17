import { projectManagerTypes } from './action'


export default function reducer(state = [], action) {
  switch (action.type) {
    case projectManagerTypes.ADD:
        return [...state,action.values]

    case projectManagerTypes.GET:
        return [...action.values]

        
    default:
      return state
  }
}