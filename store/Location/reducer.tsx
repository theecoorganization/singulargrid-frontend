import { locationActionTypes } from './action'

const locationInitialState = {
  name: '',
  description: '',
  location: {
      latitude: '',
      longitude: ''
  },
  projectType: {
      name: '',
      color: ''
  },
  images: []
}

export default function reducer(state = locationInitialState, action) {
  switch (action.type) {
    case locationActionTypes.ADD:
        return {
            ...state,
            locations: action.payload
        }

    default:
      return state
  }
}