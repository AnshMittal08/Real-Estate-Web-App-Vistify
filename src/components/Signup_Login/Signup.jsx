import React, { useState } from 'react';
import './Signup.css'; // Import CSS file for styling
import house from '../../assets/house.png';
import Logo from '../../assets/Vistify.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
   
      const userDetails = { email, password };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      alert('Signup successful');
  
      navigate('/login');
    }
  };

  return (
    <div className='wrap'>
      <div className='Badi-div'>
        <div>
          <p className='nune'>Vistify</p>
        </div>
        <div className="signup-container">
          <h2>Sign Up</h2>
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleSignup}>
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                placeholder='abc@123'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <br /><br />
              <p style={{ textAlign: "center" }}>Already have an account? <Link to="/login"><span style={{ color: "rgb(93 145 145)" }}>Login</span></Link></p>
            </div>
            <button type="submit" className="btn-signup">Sign Up</button><br />
            <br />
          </form>
        </div>
        <div className="img1">
          <Link to="/"><img src={Logo} className='logo-route' alt="logo" /></Link>
          <img className='img1' style={{ width: "50vw", height: "80vh" }} src={house} alt='house'></img>
        </div>
      </div>
    </div>
  );
};

export default Signup;

