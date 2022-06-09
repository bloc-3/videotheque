import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../environnement/firebaseConf";

const Delete = ({ postId }) => {
  const handleDelete = () => {
    deleteDoc(doc(db, "posts", postId));
  };

  return (
    <span className="delete" onClick={(e) => handleDelete()}>
      <i className="fa-solid fa-trash-can"></i>
    </span>
  );
};

export default Delete;
