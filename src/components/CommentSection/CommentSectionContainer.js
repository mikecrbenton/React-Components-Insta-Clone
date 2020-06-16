// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, changeComment] = useState(props.comments)
  
  //console.log( comment )

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map( comment => {
         return <CommentInput comment={comment.text} username={comment.username}/>}  
      )}   
    </div>
  );
};

export default CommentSection;
