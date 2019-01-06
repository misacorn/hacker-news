import React from "react";
import "./Stories.css";
import Story from "./Story";
import StoriesHeader from "./StoriesHeader";

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

const Stories = ({ stories, onArchive }) => (
  <div className="stories">
    <StoriesHeader columns={COLUMNS} />
    {(stories || []).map(story => (
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
        onArchive={onArchive}
      />
    ))}
  </div>
);

export default Stories;
