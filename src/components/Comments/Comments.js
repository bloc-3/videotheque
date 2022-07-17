import React from "react";
import { useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { context } from "../../context";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";

const Comments = async ({ movieId }) => {
  const { db } = useContext(context);
  const [comments, setComments] = useState([]);

  const nickname = "flash";

  const commentsCollection = collection(db, "comments");
  const q = query(commentsCollection, where("movie_id", "==", movieId));
  setComments(await getDocs(q));

  // const favoriteMoviesCollection = collection(db, "favorite_movies");
  // const nicknamesCollection = collection(db, "nicknames");

  return (
    <div className="comments-section">
      <CommentForm movieId={movieId} />
      <ul>
        {comments.map((doc) => {
          console.log(doc.id, " => ", doc.data());
          return (
            <li key={doc.id} className="comment">
              commentaire
              {/* <Comment nickname={nickname} comment={doc.data} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
