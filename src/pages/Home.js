import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Home() {
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <input 
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Home;
