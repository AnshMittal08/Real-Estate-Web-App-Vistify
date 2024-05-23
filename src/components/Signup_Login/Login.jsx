import React, { useState } from 'react';
import './Login.css'; 
import house from '../../assets/house.png';
import Logo from '../../assets/Vistify.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails && userDetails.email === email && userDetails.password === password) {
      alert('Login successful');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='wrap-login'>
      <div className='Badi-div'>
        <div>
          <p className='nune'>Vistify</p>
        </div>
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                placeholder='example@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                placeholder='abc@123'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p style={{ textAlign: "center" }}>New User? <Link to="/sign"><span style={{ color: "rgb(93 145 145)" }}>Sign-up here</span></Link></p>
            <br />
            <button type="submit" className="btn-login">Login</button><br />
          </form>
        </div>
        <div className='img1'>
          <Link to="/"><img src={Logo} className='logo-route' alt="logo" /></Link>
          <img className='img1' style={{ width: "50vw", height: "80vh" }} src={house} alt='house'></img>
        </div>
      </div>
    </div>
  );
};

export default Login;

