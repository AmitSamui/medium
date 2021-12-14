import React from "react";
import MediumPost from "./MediumPost";
const MainBlogContainer = () => {
  return (
    <div>
      <div className="blog_section">
        <div className="blogContainer">
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
          <MediumPost></MediumPost>
        </div>
        <div className="blogContainer_right">
          <div className="up">
            <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <div className="sections">
              <div className="buttons">Self</div>
              <div className="buttons">Relationships</div>
              <div className="buttons">Data Science</div>
              <div className="buttons">Programming</div>
              <div className="buttons">Productivity</div>
              <div className="buttons">JavaScript</div>
              <div className="buttons">JavaScript</div>
              <div className="buttons">JavaScript</div>
            </div>
          </div>
          <div className="down">
            <div className="buttons">Self</div>
            <div className="buttons">Relationships</div>
            <div className="buttons">Data Science</div>
            <div className="buttons">Programming</div>
            <div className="buttons">Productivity</div>
            <div className="buttons">JavaScript</div>
            <div className="buttons">JavaScript</div>
            <div className="buttons">JavaScript</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogContainer;
