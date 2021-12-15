import React from "react";
import { Container, Button } from "@material-ui/core";

const MediumPost = ({ data }) => {
  return (
    <div>
      <div className="blog_wrapper">
        <div className="blog_main_right">
          <div className="blog_main_name">Amit Samui</div>
          <div className="blog_main_title">{data.title}</div>
          <div className="blog_main_description">{data.description}</div>
          <div className="blog_main_timestamps">
            <span className="date">Sep 18</span>
            <span className="time">4 min read</span>
          </div>
        </div>
        <div className="blog_main_left">
          <img
            src={data.imgurl}
            alt="bitch not showing"
            className="blog_main_img"
          />
        </div>
      </div>
    </div>
  );
};

export default MediumPost;
