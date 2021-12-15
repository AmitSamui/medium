import React from "react";
import { useEffect , useState} from "react";
import MediumPost from "./MediumPost";
import db from "../Firebase";
import { collection, doc, onSnapshot, getDocs } from "firebase/firestore";
import { set } from "firebase/database";

const MainBlogContainer = () => {
  const [posts, setposts] = useState([])
  const postarr = [];

  
     async function addposts () {
      const querySnapshot = await getDocs(collection(db, "posts"));
      // console.log(querySnapshot.docs);
      // querySnapshot.forEach((doc) => console.log("hello"))
      setposts(querySnapshot.docs);
      // querySnapshot.forEach((doc) => console.log(doc.id , " => " , doc.data()))
      
    };

    useEffect(() => {
      addposts()
    }, [])

   

  //  addposts();
  
    // async function show({id , data})  {
    //   console.log(id , data)
    // }

  return (
    
    <div>
      <div className="blog_section">
        <div className="blogContainer">
   
     {posts.length &&
      posts.map(post => 
      
  <MediumPost key={post.id} data={post.data()} ></MediumPost>
      
      )
    }

    {/* <div>{post.data.title}</div> */}
      {/* <MediumPost key={post.id} data={post.data} ></MediumPost> */}
        </div>
        <div className="blogContainer_right">
          <div className="up">
            <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
            <div className="sections">
              <div className="buttons">Self</div>
              <div className="buttons">Relationships</div>
              <div className="buttons">Data Science</div>
              <div className="buttons">Programming</div>
              <div className="buttons">Productivity</div>
              <div className="buttons">JavaScript</div>
              <div className="buttons">JavaScript</div>
              <div className="buttons">JavaScript</div>
            </div>
          </div>
          <div className="down">
            <div className="buttons">Help</div>
            <div className="buttons">Status</div>
            <div className="buttons">Writers</div>
            <div className="buttons">Blog</div>
            <div className="buttons">Careers</div>
            <div className="buttons">Privacy</div>
            <div className="buttons">Terms</div>
            <div className="buttons">About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogContainer;
