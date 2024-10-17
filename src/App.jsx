// App.jsx
import './App.css'; // App 전용 스타일
import Login from './login';
import MainTop from './MainTop';
import './Login.css'; // App 전용 스타일
import { useState } from 'react';
import Detail from './Detail';

function App() {
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 게시글 저장
  const [isLogin, setLogin] = useState(false);

  const handleLoginSuccess = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false); // 로그인 상태를 false로 변경하여 로그아웃 처리
  };

  const handlePostClick = (post) => {
    setSelectedPost(post); // 선택된 게시글 설정
  };

  const handleBackToMain = () => {
    setSelectedPost(null); // 메인 페이지로 돌아가기
  };

  return (
    <div className="App">
      {isLogin ? (
        <>
         {selectedPost ? (
        <Detail post={selectedPost} onBack={handleBackToMain} />
      ) : (
        <MainTop onPostClick={handlePostClick} />
      )} 
        <button onClick={handleLogout} className="logout-button">Logout</button> 
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} /> // 로그인 화면 표시
      )}
    </div>
  );
}

export default App;
