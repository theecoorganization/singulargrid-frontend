import { locationActionTypes } from './action'

const locationDetails = {
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

const marker = {
    lat: '',
    long: ''
}

export default function reducer(state = [locationDetails], action) {
  switch (action.type) {
    case locationActionTypes.ADD:
        return {
            ...state,
            locationDetails: action.payload
        }

    default:
      return state
  }
}