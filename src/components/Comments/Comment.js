import React from "react";

const Comment = ({ nickname, comment }) => {
  return (
    <div>
      <p className="nickname">{nickname}</p>
      <p className="old_comment">{comment}</p>
    </div>
  );
};

export default Comment;
