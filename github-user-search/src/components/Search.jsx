import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async (e, newPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (newPage === 1) setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos, newPage);
      if (newPage > 1) {
        setUsers(prev => [...prev, ...data.items]);
      } else {
        setUsers(data.items);
      }
      setPage(newPage);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <form className="space-y-4" onSubmit={(e) => handleSearch(e)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter GitHub username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="e.g., 10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

     
      <div className="mt-6">
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-center text-gray-500">No users found.</p>
        )}

        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex items-center space-x-4 p-4 border rounded">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>

       
        {users.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={(e) => handleSearch(e, page + 1)}
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
