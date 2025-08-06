import axios from 'axios';

const SEARCH_URL = 'https://api.github.com/search/users?q=';

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${SEARCH_URL}${encodeURIComponent(query.trim())}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Advanced Search Error:', error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Fetch User Data Error:', error);
    throw error;
  }
};
