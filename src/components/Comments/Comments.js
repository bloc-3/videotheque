import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = () => {
  return (
    <div className='comments-section'>
      <CommentForm />
      <Comment />
    </div>
  );
};

export default Comments;