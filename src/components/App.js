import React from "react";
import "./App.css";
import Stories from "./Stories";
import SearchStories from "./SearchStories";

const App = () => (
  <div className="app">
    <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
  </div>
);

// const App = ({ stories, onArchive }) => (
//   <div className="app">
//     <Stories stories={stories} onArchive={onArchive}/>
//   </div>
// );

export default App;
