"use client"
import { useRouter } from "next/navigation";
export default function AboutPage() {
    const router = useRouter();
    return(
    <div>
        <h1>ABOUT US</h1>
        <button 
        onClick={()=>router.push("/")}
        className="mt-4 px-4 bg-blue-500 text-white rounded"
        >Go Home</button>
    </div>
    );
}