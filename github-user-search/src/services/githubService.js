import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const advancedUserSearch = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `${BASE_URL}/search/users`;

  try {
    const response = await axios.get(url, {
      params: { q: query.trim() },
    });
    return response.data;
  } catch (error) {
    console.error('Advanced Search Error:', error);
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Fetch User Data Error:', error);
    throw error;
  }
};
