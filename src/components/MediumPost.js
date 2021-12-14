import React from "react";
import { Container, Button } from "@material-ui/core";

const MediumPost = () => {
  return (
    <div>
      <div className="blog_wrapper">
        <div className="blog_main_right">
          <div className="blog_main_name">Aishwarya Agrawal</div>
          <div className="blog_main_title">
            All you need is 15 minutes of strategic internet browsing.
          </div>
          <div className="blog_main_description">
            Using a Timer and a Notion sheet changed the way I consume
            information.
          </div>
          <div className="blog_main_timestamps">
            <span className="date">Sep 18</span>
            <span className="time">4 min read</span>
          </div>
        </div>
        <div className="blog_main_left">
          <img
            src="./images/dashboard-dark.png"
            alt="bitch not showing"
            className="blog_main_img"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default MediumPost;
