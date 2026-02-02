"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const Navigation = () => {
    const pathName = usePathname();
  return (
    <nav className="mt-4 space-x-4">
      <Link href='/' 
      className={`px-3 py-2 rounded ${pathName=='/' ?
        "bg-blue-600 text-white" : "text-blue-500"

      }`} 
      >Home</Link>
      <Link href='/about' 
      className={`px-3 py-2 rounded ${pathName=='/about' ?
        "bg-blue-600 text-white" : "text-blue-500"

      }`} 
       >About</Link>
      <Link href='/dashboard/setting' 
      className={`px-3 py-2 rounded ${pathName=='/dashboard/setting' ?
        "bg-blue-600 text-white" : "text-blue-500"

      }`}  
      >Dashboard Settings</Link>
    </nav>
  )
}

export default Navigation
