import React from "react";
import { Button, Container } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <div className="navbar" style={{backgroundColor: props.color}}>
      <Container>
        <div className="navbar_container">
          <div className="navbar_image ">
          <a href="/">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/medium-logo.png"
              alt="medium"
            />
            </a>
          </div>
          <div className="navbar_links">
            <li>
              <a>Our story</a>
            </li>
            <li>
              <a>Membership</a>
            </li>
            <li>
              <a href="/write">Write</a>
            </li>
            <li>
              <a>Sign In</a>
            </li>
            <Button><a href="/postwriting">Get Started</a></Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
