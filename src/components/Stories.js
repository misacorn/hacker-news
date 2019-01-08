import React from "react";
import { connect } from "react-redux";
import { getReadableStories, getFetchError } from "../selectors/story";
// import {doArchiveStory} from "../actions/archive.js"
import Story from "./Story";
import "./Stories.css";

const COLUMNS = {
  title: {
    label: "Title",
    width: "25%"
  },
  author: {
    label: "Author",
    width: "35%"
  },
  comments: {
    label: "Comments",
    width: "15%"
  },
  points: {
    label: "Points",
    width: "15%"
  },
  archive: {
    width: "10%"
  }
};

const Stories = ({ stories, error }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />
    {error && <p className="error">Something went wrong ...</p>}
    {(stories || []).map(story => (
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
        // onArchive={onArchive}
      />
    ))}
  </div>
);

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = state => ({
  stories: getReadableStories(state),
  error: getFetchError(state)
});
// const mapDispatchToProps = dispatch => ({onArchive: id => dispatch(doArchiveStory(id)),})

//Whereas mapStateToProps() gives access to the global state, mapDispatchToProps() gives access to the dispatch method of the Redux store.

export default connect(mapStateToProps)(Stories);
