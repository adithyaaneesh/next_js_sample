import React from 'react'

const ServerComponenent = () => {
    console.log("Rendering server")
  return (
    <div>
        <h1>Hello From Server Component</h1>
        {/* <button className="bg-white py-2 px-1 text-black rounded" onClick={() => alert("Clicked") }>Click Me</button>   */}
        {/* cannot pass hook or interactive events in a server side component */}

    </div>
  )
}

export default  ServerComponenent

