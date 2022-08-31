import { useState, useContext } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

import { context } from "../../context";

const Comment = ({ commentId, author, nickname, comment }) => {
  const { db, userId } = useContext(context);

  const [modifyingComment, setModifyingComment] = useState(false);

  let newComment = comment;

  const updateComment = () => {
    const documentComment = doc(db, "comments", commentId);

    updateDoc(documentComment, {
      user_id: userId,
      comment: newComment,
    });
    setTimeout(() => {
      window.location.reload();
    }, "500");
  };

  const deleteComment = () => {
    const documentComment = doc(db, "comments", commentId);

    deleteDoc(documentComment).then(() => {
      // vide
      window.location.reload();
    });
  };

  return (
    <>
      {modifyingComment ? (
        <div>
          <input
            type="text"
            className="comment_zone"
            defaultValue={newComment}
            onChange={(e) => {
              newComment = e.target.value;
            }}
          />

          <button value="Poster" onClick={updateComment}>
            Sauvegarder
          </button>
        </div>
      ) : (
        <p className="comment_data">
          <span className="nickname">{nickname}</span> :{" "}
          <span className="comment">{comment}</span>
        </p>
      )}
      {userId === author ? (
        <div className="commentButtons">
          <button
            className="buttonEditComment"
            onClick={() => {
              setModifyingComment(true);
              console.log(modifyingComment);
            }}
          >
            Modifier
          </button>
          <button className="buttonDeleteComment" onClick={deleteComment}>Supprimer</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
