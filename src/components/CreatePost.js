import React from 'react';

function CreatePost(props) {
    return (
        <div className="new-post-modal">
          <form>
            <textarea placeholder="Message..."></textarea>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
    );
}

export default CreatePost;