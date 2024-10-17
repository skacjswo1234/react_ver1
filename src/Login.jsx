import { useState } from 'react';
import './Login.css';

function Login({onLoginSuccess}) {
  const [loginInfo, setLoginInfo] = useState({ ID: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태 관리

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  };

  const handleLogin = () => {
    //먼저 빈값 체크시 loginInfo 정보를 꺼내왔다.
    const { ID, password } = loginInfo;

    // 유저 이름 또는 비밀번호가 비어있을 경우 alert 표시
    if (!ID || !password) {
      alert('Please enter both username and password.');
      return;
    }

    if (ID === 'nhw' && password === '1234') {
        onLoginSuccess();
    } else {
        // 비밀번호가 틀리면 alert 표시
        alert('Please check your ID or password.');
    }

    console.log('Logging in with', loginInfo);
    // 로그인 처리 로직 (API 연동 등)
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">ID:</label>
        <input
          type="text"
          id="ID"
          name="ID"
          value={loginInfo.ID}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <div className="password-wrapper">
          <input
            type="password" // showPassword 상태에 따라 input 타입 변경
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
