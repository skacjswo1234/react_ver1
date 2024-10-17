import React from 'react';
import './MainTop.css'; // 스타일 파일

// 가상의 게시글 데이터
const posts = [
  { id: 1, title: '1. 이것은 첫번쨰 타이틀입니다. ↓ Click', content: '남' },
  { id: 2, title: '2. 이것은 두번쨰 타이틀입니다. ↓ Click', content: '현' },
  { id: 3, title: '3. 이것은 세번쨰 타이틀입니다. ↓ Click', content: '우' },
];

function MainTop({onPostClick}) {

  const postItems = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    postItems.push(
      <li key={post.id} className="post-item" onClick={() => onPostClick(post)}>
        <h2>{post.title}</h2>
      </li>
    );
  }

  return (
    <div className="main-container">
    <h1>게시글 목록
    </h1>
    <ul className="post-list">
      {postItems} 
    </ul>
  </div>
  );
}

export default MainTop;
