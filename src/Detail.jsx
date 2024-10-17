import React from 'react';

function Detail({ post, onBack }) {
  return (
    <div className="detail-container">
      <button onClick={onBack}>Back</button>
      <h1>{post.content}</h1>
    </div>
  );
}

export default Detail;
