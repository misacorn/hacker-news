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

//However, this method will:

// Re-rendering every component: You want to re-render only the components that are affected by the global state updated in the Redux store. Otherwise, you will run into performance issues in a larger application, because every component needs to render again with every action that changes the global state in Redux.

// Using the store instance directly: You want to avoid to operate directly on the Redux store instance. The store should be injected somehow into your React component tree to make it accessible for components that need to have access to the store.

// Making the store globally available: The store shouldn’t be globally accessible by every component. In the previous example, only the React entry point file used it, but who prevents you from importing it directly in your Stories or Story component to dispatch an action?