import Button from "react-bootstrap/Button"
import { useAuth } from "../components/contexts/AuthContext";
import { useNavigate } from "react-router-dom"
import ImageUploader from "../components/ImageUploader/ImageUploader";
import InfoEditor from "../components/InfoEditor/InfoEditor";

function Dashboard() {
    const { logout } = useAuth();
    const navigate = useNavigate()

   async function handleLogout() {
        await logout()
        navigate("/")
    }

    return ( 
        <>
            <Button variant="dark" onClick={handleLogout} style={{ marginLeft: '1rem' }}>Delogare</Button>
            <h1>Dashboard</h1>
            <ImageUploader />
            <InfoEditor />
        </>
    )
}

export default Dashboard;