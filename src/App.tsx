import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContentRoutes from "./routes/ContentRoutes";
import { AuthProvider } from "./components/contexts/AuthContext";
import { EditableInfoProvider } from "./components/contexts/EditeableInfoContext";

function App() {
  return (
    <AuthProvider>
      <EditableInfoProvider>
        <div className="mainDiv">
          <Navbar />
          <ContentRoutes />
          <Footer />
        </div>
      </EditableInfoProvider>
    </AuthProvider>
  );
}

export default App;