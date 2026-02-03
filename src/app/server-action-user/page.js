import { resolve } from "styled-jsx/css";

 export default async function UserServerAction() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const res = await fetch('https://67aeb4f39e85da2f020e1f07.mockapi.io/users');
    const users = await res.json();

    return(
        <div>
            <form className="w-96 bg-slate-300 shadow-lg rounded-lg p-6 border">
                <div className="flex items-center gap-4 mb-4">
                    <label className="text-gray-700  font-medium w-20">Name</label>
                    <input name="name" type="text" 
                    className="flex-1 p-2 border border-grey-300 rounded-lg focus:outline"></input>
                    <button type="submit" className="w-fit px-4 py-2 bg-blue-500 text-white">SUBMIT</button>
                </div>
            </form>
            <h1>User List (Server Component)</h1>
            <ul>
                {users.map(user => (
                    <li key = {user.id} className="bg-blue-100 border border-b-blue-300">
                        <strong className="text-blue-700">{user.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    ); 

    
}