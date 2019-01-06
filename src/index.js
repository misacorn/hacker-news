import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
// import { STORY_ARCHIVE } from "./constants/actionTypes";
import { getReadableStories } from "./selectors/story";
import { doArchiveStory } from "./actions/archive";
import "./index.css";

function render() {
  ReactDOM.render(
    <App
      //stories={store.getState().storyState}
      stories={getReadableStories(store.getState())}
      //onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
      onArchive={id => store.dispatch(doArchiveStory(id))}
    />,
    document.getElementById("root")
  );
}

store.subscribe(render);
render();

//Now the components will re-render once you archive a story, because the state in the Redux store updates and the subscription will run to render again the whole component tree. In addition, you render the component once when the application starts.
