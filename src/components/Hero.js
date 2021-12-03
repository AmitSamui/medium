import { Container, Button } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <div className="hero_container">
      <Container>
        <div className="hero_wrapper">
          <div className="hero_left">
            <div className="hero_title">
              Medium is a place to write, read, and connect
            </div>
            <div className="hero_subtitle">
              It's easy and free to post your thinking on any topic and connect
              with millions of readers.
            </div>
            <Button>Start Writing</Button>
          </div>
          <div className="hero_right">
            <img
              src="./images/heroimage.svg"
              alt="bitch not showing"
              srcset=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
