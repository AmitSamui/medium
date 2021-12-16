import React from "react";
import { Container, emphasize } from "@material-ui/core";

const Footer = () => {
  return (
    <div>
      <div className="footers">
        <Container>
        <a href="/">
            <img className="Footer_img"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/medium-logo.png"
              alt="medium"
            />
            </a>
            <p>
            Designed and Made by Amit and Sneha
            </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
