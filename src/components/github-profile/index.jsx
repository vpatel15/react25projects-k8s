import React, { useState } from "react";
// https://api.github.com/users/vpatel15

// {
//   "login": "vpatel15",
//   "id": 16133959,
//   "node_id": "MDQ6VXNlcjE2MTMzOTU5",
//   "avatar_url": "https://avatars.githubusercontent.com/u/16133959?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/vpatel15",
//   "html_url": "https://github.com/vpatel15",
//   "followers_url": "https://api.github.com/users/vpatel15/followers",
//   "following_url": "https://api.github.com/users/vpatel15/following{/other_user}",
//   "gists_url": "https://api.github.com/users/vpatel15/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/vpatel15/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/vpatel15/subscriptions",
//   "organizations_url": "https://api.github.com/users/vpatel15/orgs",
//   "repos_url": "https://api.github.com/users/vpatel15/repos",
//   "events_url": "https://api.github.com/users/vpatel15/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/vpatel15/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Vaibhav Patel",
//   "company": null,
//   "blog": "",
//   "location": "Pune, India",
//   "email": null,
//   "hireable": null,
//   "bio": "Expert Javascript Fullstack Developer",
//   "twitter_username": "VaibhavPatelDev",
//   "public_repos": 34,
//   "public_gists": 0,
//   "followers": 3,
//   "following": 26,
//   "created_at": "2015-12-03T11:36:36Z",
//   "updated_at": "2024-08-21T10:40:12Z"
// }
const GithubProfile = () => {
  // const url = `https://api.github.com/users/${userName}`;
  // const {data, error, loading} = useFetch(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://api.github.com/users/${searchTerm}`;
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  console.log(data);

  return (
    <div style={{ padding: 50, display: "flex", flexDirection: "column", alignItems: 'center' }}>
      {data && Object.keys(data).length > 0 && (
        <img src={data.avatar_url} alt="avatar" />
      )}
      <input
        placeholder="Search for any github username"
        style={{ width: 200 }}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button style={{ width: 100 }} onClick={fetchData}>
        Search
      </button>
    </div>
  );
};

export default GithubProfile;
