import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          style={{ padding: '8px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: '30px' }}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              style={{ width: '100px', borderRadius: '50%' }}
            />
            <h2>{userData.name ? userData.name : userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
