import React from "react";
import { useContext } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { context } from "../../context";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ movieId }) => {
  const { db } = useContext(context);
  const nickname = "flash";
  const comment = "Lorem blablabla";

  const commentsCollection = collection(db, "comments");
  const favoriteMoviesCollection = collection(db, "favorite_movies");
  const nicknamesCollection = collection(db, "nicknames");

  const q = query(commentsCollection, where("movie_id", "==", movieId));

  onSnapshot(q, (snapshot) => {
    console.log(snapshot);
  });

  return (
    <div className="comments-section">
      <CommentForm movieId={movieId} />
      <ul>
        <li>
          <Comment nickname={nickname} comment={comment} />
        </li>
      </ul>
    </div>
  );
};

export default Comments;
