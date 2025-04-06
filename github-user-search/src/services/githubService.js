import axios from 'axios';

export const fetchUsers = async (username, location, minRepos, page = 1) => {
  const query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const searchQuery = query.join('+');

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&page=${page}&per_page=10`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
