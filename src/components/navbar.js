import React from "react";
import { Button, Container } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar_container">
          <div className="navbar_image ">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/medium-logo.png"
              alt="medium"
            />
          </div>
          <div className="navbar_links">
            <li>
              <a>Our story</a>
            </li>
            <li>
              <a>Membership</a>
            </li>
            <li>
              <a>Write</a>
            </li>
            <li>
              <a>Sign In</a>
            </li>
            <Button>get started</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
