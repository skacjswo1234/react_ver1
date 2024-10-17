import { useState } from 'react';
import './Login.css';

function Login({onLoginSuccess}) {
  const [loginInfo, setLoginInfo] = useState({ ID: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  }

  function handleLogin() {
    
    const { ID, password } = loginInfo;

    if (!ID || !password) {
      alert('Please enter both username and password.');
      return;
    }

    
    if (ID === 'nhw' && password === '1234') {
      onLoginSuccess();
    } else {
      alert('Please check your ID or password.');
    }

  }


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
            type="password" 
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
