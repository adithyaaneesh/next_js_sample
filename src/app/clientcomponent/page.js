"use client"; // This make it as client component
import React from 'react'

const ClientComponenent = () => {
    console.log("Rendering Client component")
  return (
    <div>
      <h1>Hello From Client Component</h1>
      <button className="bg-white py-2 px-1 text-black rounded" onClick={() => alert("Clicked") }>Click Me</button>
    </div>
  );
}

export default  ClientComponenent

