import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Login attempt: ${email}`);
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email}
          onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}