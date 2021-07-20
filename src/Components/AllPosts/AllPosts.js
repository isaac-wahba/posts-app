import React, { useState, useEffect } from "react";

import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);


  const postsURL = "https://jsonplaceholder.typicode.com/posts";
  const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await axios.get(postsURL);

      console.log("POsts Data :: \n\n", allPosts.data);
      setPosts(allPosts.data);
    };
    
    fetchPosts();
  }, []);

  /*
  useEffect(() => {
    const fetchComments = async () => {
      const postComments = await axios.get(commentsURL);

      console.log("Comments Data :: \n\n", postComments.data);
      setComments(postComments.data);
    };
    
    fetchComments();

  }, [commentsURL]); 
*/

/*
 const renderComments =comments.map((comment) => {
  return (
    <div className="card-design" key={comment.id}>
      <ol>
        <h1> Name: {comment.name}</h1>
        <h2>Email: {comment.email}</h2>
        <p>Body : {comment.body}</p>
      </ol>
    </div>
  );
});
 /* <div>{renderComments}</div> */


  const renderPosts = posts.map((post) => {
    return (
      <div className="card-design" key={post.id}>
        <ol>
          <h1> Title: {post.title}</h1>
          <p>Body : {post.body}</p>
          <button onClick={setPostId(post.id)}>Show Comments</button>
        
        </ol>
      </div>
    );
  });

  return (
    <div>
      <ul className="cards-list">{renderPosts}</ul>
    </div>
  );
};

export default AllPosts;
