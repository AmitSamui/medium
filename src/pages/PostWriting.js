import React from "react";
import { useState } from "react";
import { Container, Button } from "@material-ui/core";
import Footer from "../components/Footer";

import db from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

const PostWriting = () => {
  // this is the orm input
  const [forminput, setFormInput] = new useState({
    title: "",
    description: "",
    paragraph: "",
    imgurl: ""
  });

  // const [image, setImage] = useState("");

  // this is the dynamic image uploading code
  const inputHnadler = (event) => {
    setFormInput({ ...forminput, [event.target.name]: event.target.value });
    // setImage(event.target.imageurl)
  };

  


  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  async function writeUserData(title, description, paragraph , imageurl) {
    try {
      // console.log(imageurl);
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        description: description,
        paragraph: paragraph,
        imgurl: `${imageurl}`,
        clap: 0,
        dislike: 0
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    writeUserData(forminput.title, forminput.description, forminput.paragraph , forminput.imgurl);

    setFormInput({
      ...forminput,
      title: "",
      description: "",
      paragraph: "",
      imgurl: "",

    });
    // setImage(null);
  };

  return (
    <div>
      <div className="navbar_postwriting">
        <Container>
          <div className="wrapper_post_nav">
            <div className="navbar_image">
            <a href="/">
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2020/10/medium-logo.png"
                alt="medium"
              />
              </a>
            </div>
            <div className="nav_post_right">
              {/* <div className="image">
                <input
                  type="file"
                  id="file"
                  onChange={onImageChange}
                  accept="image/*"
                  className="filetype"
                />
                <label for="file">+</label>
              </div> */}
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Container>
      </div>

      <form>
        <Container>
          <div className="blog_title forms">
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
            <input
              type="text"
              name="description"
              className="post_input_description"
              value={forminput.description}
              placeholder="write the description of the blog in 20 words..."
              onChange={inputHnadler}
            />
          </div>

          <div className="blog_img forms">
            
            <input
              type="text"
              value={forminput.imgurl}
              onChange={inputHnadler}
              name="imgurl"
              className="post_input_image"
              placeholder="Image link"
            />
          </div> 
          <img src={forminput.imgurl} className="posting_image" />

          <div className="blog_paragraph forms">
            <textarea
              type="text"
              name="paragraph"
              value={forminput.paragraph}
              placeholder="content of the blog..."
              onChange={inputHnadler}
            />
          </div>
          
           {/* <div className="button_wrapper">
            <Button>Submit</Button>
          </div>  */}
        </Container>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default PostWriting;
