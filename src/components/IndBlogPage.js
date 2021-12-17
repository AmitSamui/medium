import { Button, Container } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Footer from "./Footer";
import db from "../Firebase";
import Navbar from "./navbar";

const IndBlogPage = () => {
  const [postData, setpostData] = useState({});
  const [appreaciations, setAppreciations] = useState(0);
  const [dislike, setdislikes] = useState(0);
  const [disableclap, setdisableclap] = useState(false);
  const [disabledislike, setdisabledislike] = useState(false);
  const id = useParams();
  console.log(id.id);

  const getblog = async () => {
    const docRef = doc(db, "posts", `${id.id}`);
    const docSnap = await getDoc(docRef);

    // console.log(docSnap);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setpostData(docSnap.data());
      setAppreciations(postData.clap);
      setdislikes(postData.dislike);
      // console.log("post data" ,postData.title);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const updateClap = async () => {
    setAppreciations(postData.clap + 1);

    setdisableclap(true);
    setdisabledislike(false);

    const docRef = doc(db, "posts", `${id.id}`);
    await updateDoc(docRef, {
      clap: postData.clap + 1,
    });
  };
  const updateDislike = async () => {
    setdislikes(postData.dislike + 1);
    setdisableclap(false);
    setdisabledislike(true);

    const docRef = doc(db, "posts", `${id.id}`);
    await updateDoc(docRef, {
      dislike: postData.dislike + 1,
    });
  };

  useEffect(() => {
    getblog();
  }, [id.id]);

  return (
    <div>
      <Navbar color="whitesmoke"></Navbar>
      <Container>
        <main class="indivi_blog_container">
          <header class="indivi_blog_header">
            <h1 class="indivi_blog_heading">{postData.title}</h1>
            <p class="indivi_blog_subheading">{postData.description}</p>
            <div class="indivi_blog_profilename">
              <div class="blog_user">
                <p class="blog_username">Amit Samui</p>
                <p class="blog_date">17th Dec. 6 min read</p>
              </div>
              {/* <!-- <div class="blog_username_socials"> -->
                <!-- <img class="blog_username_socials_img" src="https://image.flaticon.com/icons/png/512/1216/1216882.png" alt="p"> -->
                <!-- <img class="blog_username_socials_img" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/>
                <img class="blog_username_socials_img" src="https://img.icons8.com/ios-glyphs/30/000000/twitter-circled--v2.png"/>
                <img class="blog_username_socials_img" src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png" alt="p">
                <img class="blog_username_socials_img" src="https://img.icons8.com/small/16/000000/save-close.png"/>
                <img class="blog_username_socials_img dots" src="https://img.icons8.com/ios-glyphs/50/000000/dots-loading--v2.png"/>
            </div> --> */}
            </div>
          </header>

          <section class="indivi_blog_content">
            <img
              class="indivi_blog_img"
              src={postData.imgurl}
              alt="large-image"
            />
            <p>{postData.paragraph}</p>
            <div className="work">
              <div className="appreciated">
                <Button
                  className="clap"
                  disabled={disableclap}
                  onClick={updateClap}
                >
                  <img src="../images/claps.svg" />
                  like
                </Button>
                <div className="appreciate">{appreaciations}</div>
              </div>
              <div className="not_appreciated">
                <Button
                  className="dislike"
                  disabled={disabledislike}
                  onClick={updateDislike}
                >
                  <img src="../images/claps.svg" />
                  dislike
                </Button>
                <div className="unappriciate">{dislike}</div>
              </div>
            </div>
          </section>
          <aside class="indivi_blog_aside">
            <h4 class="heading">Other Articles you might Enjoy</h4>
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1457269315919-3cfc794943cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2c42c1cac3092204f4c1afdca4d44e99"
                alt=""
              />
              <div>
                <p class="heading title">The big subtext</p>
                <p class="author">Mathews</p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1528640936814-4460bc015292?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=66812b5fda04c80ff762c8a920f562f3"
                alt=""
              />
              <div>
                <p class="heading title">The bug subtext</p>
                <p class="author">Harsha</p>
              </div>
            </div>
          </aside>
        </main>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default IndBlogPage;
