//if there is only 1 reducer
// import { createStore } from 'redux';
// import rootReducer from '../reducers';
// const store = createStore(rootReducer);
// export default store;

import { combineReducers } from "redux";
import storyReducer from "./story";
import archiveReducer from "./archive";


const rootReducer = combineReducers(
  {
    storyState: storyReducer,
    archiveState: archiveReducer
  },
);

export default rootReducer;
