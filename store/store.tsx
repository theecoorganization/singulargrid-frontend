import { HYDRATE,createWrapper } from "next-redux-wrapper";
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import locationDetails from './Location/reducer'
import marker from './Marker/reducer'
import projectDetails from "./Project/reducer"
import projectManagers from "./Lov/ProjectManager/reducer"
import projectTypes from "./Lov/ProjectType/reducer"

export interface State {
  app: string;
  page: string;
}

const combinedReducer = combineReducers({
  locationDetails,
  marker,
  projectManagers,
  projectDetails,
  projectTypes
})

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}


const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)