import axios from 'axios';

export const advancedSearchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const finalQuery = query.trim();

  const response = await axios.get(`https://api.github.com/search/users?q=${finalQuery}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      return userDetails.data;
    })
  );

  return detailedUsers;
};
