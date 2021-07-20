import React, { useState, useEffect } from "react";
import '../styles.css'
import Comment from '../Comment/Comment'

import axios from "axios";

const SinglePost = ({post}) => {
    const [postId, setPostId] = useState(null);
    const [comments, setComments] = useState([]);


    const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;



    useEffect(   () => {
        const fetchComments = async () => {
            const postComments = await axios.get(commentsURL);

            setComments(postComments.data);
        };

        fetchComments();

    }, [commentsURL]);

    const renderComments =comments.map((comment) => {
        return (
            <Comment comment={comment} />
        );
    });



    return (
        <div className="Layout ui card row" key={post.id}>
            <ol>
                <h1 className="ui header"> {post.title}</h1>

                <p className="content">{post.body}</p>
                <div className="CommentsButton">
                    <div className="ui labeled button" tabIndex="0" onClick={() => setPostId(post.id)}>
                        <div className="ui blue button">
                            <i className="comments icon"/>
                        </div>
                        <div className="CommentIcon ui basic blue left pointing label">
                            Show Comments
                        </div>
                    </div>

                </div>
                { post.id===postId ?
                    <div>
                        <br/>
                        <h3 className="ui dividing header">Comments</h3>
                        <div className="ui grid">{renderComments}</div>

                    </div>

                    : null}
            </ol>
            <hr/>
        </div>
    );
};

export default SinglePost;
