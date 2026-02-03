"use client";
import {useEffect, useState} from 'react';

const usersClient = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                setUsers(data.slice(0, 5));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users : ",error);
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);

  return (
    <div>
      <h1>User List (Client Component)</h1>
      {loading ? <p>Loading....</p> : (
        <ul>
            {users.map((users) => (
                <li key = {users.id}>
                    <strong>{users.name}</strong> - {users.email}
                </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default usersClient
