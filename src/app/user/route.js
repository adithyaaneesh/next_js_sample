let users = [
    {
        id:1,
        name:"Alice",
        email:"alice@example.com"
    },
    {
        id:2,
        name:"Bob",
        email:"bob@example.com"
    },
]
export async function GET()
{
    return Response.json(users)
}
export async function POST(req)
{
    const body = await req.json();
    const newUser = {id:users.length+1,...body}
    users.push(newUser)
    return Response.json(newUser,{status:201})
}