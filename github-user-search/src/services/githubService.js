import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchGitHubUsers = async (username) => {
  const response = await axios.get(`https://api.github.com/search/users`, {
    params: { q: username },
    headers: {
      Authorization: token ? `token ${token}` : undefined,
    },
  });
  return response.data.items;
};
