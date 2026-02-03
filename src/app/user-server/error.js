'use client' ; // Mark this as a Client Component

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
    useEffect(() => {
        console.error("Error fetching users: ", error);
    }, [error]);
    return(
        <div>
            <h2>Oops!! Something Went Wrong.</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    );
}