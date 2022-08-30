import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { context } from "../../context";

const CommentForm = ({ movieId }) => {
  let comment = "";

  const { db, userId } = useContext(context);

  const commentsCollection = collection(db, "comments");

  const addComment = (e) => {
    e.preventDefault();

    addDoc(commentsCollection, {
      user_id: userId,
      movie_id: movieId,
      comment: comment,
    }).then(() => {
      //vide
      window.location.reload();
    });
  };

  return (
    <>
      <div classname="commentFormContainer">
        {userId === null ? (
          <p className="notConnected">
            Connectez vous pour ajouter un commentaire
          </p>
        ) : (
          <form className="commentForm" onSubmit={addComment}>
            {/* <textarea
            name="comment"
            className="comment_zone"
            rows="10"
            cols="30"
            placeholder="Saisissez votre commentaire ici."
            onChange={(e) => {
              comment = e.target.value;
            }}
          ></textarea> */}
            <input
              type="text"
              classname="commentInput"
              placeholder="Saisissez votre commentaire ici."
              onChange={(e) => {
                comment = e.target.value;
              }}
            />
            <input type="submit" value="Poster" />
          </form>
        )}
      </div>
    </>
  );
};

export default CommentForm;
