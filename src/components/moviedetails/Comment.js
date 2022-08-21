const Comment = ({ commentId, nickname, comment }) => {
  return (
    <>
      <p className="comment_data">
        <span className="nickname">{nickname}</span> :{" "}
        <span className="comment">{comment}</span>
      </p>
      {}
    </>
  );
};

export default Comment;
