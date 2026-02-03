import { resolve } from "styled-jsx/css";

export default async function UsersPage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return(
        <div>
            <h1>User List (Server Component)</h1>
            <ul>
                {users.map(user => (
                    <li key = {user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );

    
}