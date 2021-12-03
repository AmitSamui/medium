import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { Container, Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [forminput, setFormInput] = new useState({
    title: "",
    paragraph: "",
    imgurl: "",
  });

  const inputHnadler = (event) => {
    setFormInput({ ...forminput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <form>
        <Container>
          <div className="blog_title forms">
            <span>Title</span>

            <input
              type="text"
              name="title"
              value={forminput.title}
              placeholder="write the title of the blog..."
              onChange={inputHnadler}
            />
          </div>

          <div className="blog_description forms">
            <span>Description</span>

            <input
              type="text"
              name="title"
              value={forminput.title}
              placeholder="write the description of the blog in 20 words..."
              onChange={inputHnadler}
            />
          </div>
          <div className="blog_paragraph forms">
            <span>Paragraph</span>
            <textarea
              type="text"
              name="paragraph"
              value={forminput.paragraph}
              placeholder="content of the blog..."
              onChange={inputHnadler}
            />
          </div>
          <div className="blog_img forms">
            <span>Image url</span>
            <input
              type="text"
              value={forminput.imgurl}
              onChange={inputHnadler}
              name="imgurl"
              placeholder="img url ..."
            />
          </div>
          <div className="button_wrapper">
            <Button >Submit</Button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default App;
