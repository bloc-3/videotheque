import React, { useState } from "react";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);

  const nickname = "flash";


  return (
    <div className="comments-section">
      <CommentForm movieId={movieId} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={Math.random()} className="comment">
              <Comment nickname={nickname} comment={"vide"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
