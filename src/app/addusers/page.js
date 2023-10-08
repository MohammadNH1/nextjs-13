'use client'
import React, { useState } from 'react';
import '../style.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!name||!email|| ! password) return alert('required field missing!')
    const response = await fetch('http://localhost:3000/api/users',{
        method:'POST',
        body:JSON.stringify({name,email,password})
    })
    const data = await response.json()
    if(data) {
        // setName('')
        // setEmail('')
        // setPassword('')
        alert('user created successfully!')
    }


  };

  return (
    <div className="App">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;
