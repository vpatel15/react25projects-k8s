import React, { useEffect, useState } from "react";
import useResize from "../../hooks/useResize";

const SearchAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listData, setListData] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const windowSize = useResize();
  const {width, height} = windowSize;

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const url = `https://dummyjson.com/users`;
      const response = await fetch(url);
      const json = await response.json();
      if(json && json.users && json.users.length > 0){
        setUsers(json.users);
        setLoading(false);
      } else if(json.users.length === 0) {
        setUsers(json.users);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filterResults = (searchTerm) => {
      // @ts-ignore
      const list = searchTerm && users.filter((user) => user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      // console.log('on render list: ', list);
      return list;
    }
    setListData(filterResults(searchTerm));
  }, [searchTerm, users])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // console.log(users);
  // console.log(searchTerm);

  return (
    <div style={{padding: 50}} className="search-automplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Search users here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {listData && listData.length > 0 && listData.map((user) => (<li>
            {user.
// @ts-ignore
            firstName}
          </li>))
          }
      </ul>
      <span>{width}</span><br/>
      <span>{height}</span>
    </div>
  );
};

export default SearchAutocomplete;
