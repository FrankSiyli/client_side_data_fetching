import { useState, useEffect } from "react";


/* npm install -g json-server
json-server --watch db.json (Testserver läuft default auf 3000)
json-server -p 4000 db.json */

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:3000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
    
        }
        fetchDashboardData()
    }, [])
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (<div>
        <h1>Dashboard</h1>
        <h2>Posts: {dashboardData.posts}</h2>
        <h2>Likes: {dashboardData.likes}</h2>
        <h2>Followers: {dashboardData.followers}</h2>
        <h2>Following: {dashboardData.followig}</h2>
        
    </div>
    )
}