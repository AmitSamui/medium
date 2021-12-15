import React from "react";
import Navbar from "./navbar";

const Write = () => {
  return (
    <div>
    <Navbar color="#f24d2e"></Navbar>
      <div class="head">
        <div class="head-writing">
          <p class="pt1">START A BLOG FOR FREE.</p>
          <h1 class="write-header">
            Publish, grow, and earn, all in one place.
          </h1>
          <p class="pt2">
            If you have a story to tell, knowledge to share, or a perspective to
            offer — welcome home. Here, your writing can thrive in a network
            supported by millions of readers — not ads.
          </p>

          <a href="/postwriting" class="cta">
            <span>Start Writing</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>

        <div class="head-image">
          <img class="head-img" src="./images/07.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Write;
