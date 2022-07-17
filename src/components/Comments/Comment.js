import React from "react";

const Comment = ({ nickname, comment }) => {
  return (
    <>
      <p className="nickname">{nickname}</p>
      <p className="old_comment">{comment}</p>
    </>
  );
};

export default Comment;
