import React from "react";
import { useState } from "react";
import { Container, Button } from "@material-ui/core";
import Footer from "../components/Footer";
const PostWriting = () => {
  const [forminput, setFormInput] = new useState({
    title: "",
    paragraph: "",
    imgurl: "",
  });

  const inputHnadler = (event) => {
    setFormInput({ ...forminput, [event.target.name]: event.target.value });
  };

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="navbar_postwriting">
        <Container>
          <div className="wrapper_post_nav">
            <div className="navbar_image">
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/medium-logo.png"
                alt="medium"
              />
            </div>
            <div className="nav_post_right">
              <div className="image">
                <input
                  type="file"
                  id="file"
                  onChange={onImageChange}
                  accept="image/*"
                  className="filetype"
                />
                <label for="file">+</label>

                
              </div>
              <Button>Submit</Button>
            </div>
          </div>
        </Container>
      </div>

      <form>
        <Container>
          <div className="blog_title forms">
            {/* <span>Title</span> */}

            <input
              type="text"
              name="title"
              className="post_input_title"
              value={forminput.title}
              placeholder="Title"
              onChange={inputHnadler}
            />
          </div>

          <div className="blog_description forms">
            {/* <span>Description</span> */}

            <input
              type="text"
              name="description"
              className="post_input_description"
              value={forminput.description}
              placeholder="write the description of the blog in 20 words..."
              onChange={inputHnadler}
            />
          </div>
          <img src={image} className="posting_image" />
          <div className="blog_paragraph forms">
            {/* <span>Paragraph</span> */}
            <textarea
              type="text"
              name="paragraph"
              value={forminput.paragraph}
              placeholder="content of the blog..."
              onChange={inputHnadler}
            />
          </div>
          {/* <div className="blog_img forms">
            <span>Image url</span>
            <input
              type="text"
              value={forminput.imgurl}
              onChange={inputHnadler}
              name="imgurl"
              placeholder="img url ..."
            />
          </div> */}
          {/* <div className="button_wrapper">
            <Button>Submit</Button>
          </div> */}
        </Container>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default PostWriting;

{
  /* <div className="image">
      <input
        type="file"
        id="file"
        onChange={onImageChange}
        accept="image/*"
        className="filetype"
      />
      <label for="file">+</label>

      <img src={image} alt="preview image" />
    </div> */
}
