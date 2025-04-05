import axios from 'axios';

const API = async (username) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${username}`
  );
  return response.data.items;
};

export default API;