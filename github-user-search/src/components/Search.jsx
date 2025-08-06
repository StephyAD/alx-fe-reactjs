import { useState } from 'react';
import { advancedSearchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const users = await advancedSearchUsers(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}
      <div className="mt-6">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-4 flex items-center gap-4">
            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <p>Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">Visit</a></p>
              {user.location && <p>Location: {user.location}</p>}
              {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
