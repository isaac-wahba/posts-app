

import React, { useState, useEffect } from "react";
import '../styles.css'
import SinglePost from "../SinglePost/SinglePost";

import axios from "axios";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);



    const postsURL = "https://jsonplaceholder.typicode.com/posts";

    useEffect( () => {
        const fetchPosts = async () => {
            const allPosts = await axios.get(postsURL);

            setPosts(allPosts.data);
        };

         fetchPosts();
    }, []);






    const renderPosts = posts.map((post) => {
        return (
            <SinglePost key={post.id} post={post}/>
        );
    });

    return (
        <div>
            <ul className= " ui grid cards list">{renderPosts}</ul>
        </div>
    );
};

export default AllPosts;
