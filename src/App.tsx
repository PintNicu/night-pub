import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dahsboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import { EditableInfoProvider } from "./components/contexts/EditeableInfoContext";
import WebImage from "./components/WebImage/WebImage";


function App() {
  return (
    <AuthProvider>
      <EditableInfoProvider>
        <div className="mainDiv" >
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Contact" element={<Contact />} />
              <Route
                path="/Dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/images/zepelin-1929-cocktails.jpg" element={<WebImage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </EditableInfoProvider>
    </AuthProvider>
  );
}

export default App;
