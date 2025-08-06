import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      setUserData(null);

      const response = await axios.get(`https://api.github.com/users/${query}`);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
