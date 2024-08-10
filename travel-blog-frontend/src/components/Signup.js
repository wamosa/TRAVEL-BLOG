import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/signup', { email, password })
      .then(response => alert(response.data))
      .catch(error => console.error('There was an error!', error));
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

