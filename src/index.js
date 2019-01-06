import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import { STORY_ARCHIVE } from "./constants/actionTypes";
import { getReadableStories } from "./selectors/story";
import "./index.css";

ReactDOM.render(
  <App
    //stories={store.getState().storyState}
    stories={getReadableStories(store.getState())}
    onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
  />,
  document.getElementById("root")
);
