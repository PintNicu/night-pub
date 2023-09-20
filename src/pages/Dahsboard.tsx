import { useState } from "react";
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { useAuth } from "../components/contexts/AuthContext";
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate()

   async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/")

        } catch {
            setError('Delogare nereușită')
        }
    }

    return ( 
        <>
            <h1>Dashboard</h1>
            <Button variant="dark" onClick={handleLogout}>Delogare</Button>
        </>
    )
}

export default Dashboard;