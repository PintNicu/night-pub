import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import { EditableInfoProvider } from "./components/contexts/EditeableInfoContext";


const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Menu = lazy(() => import("./pages/Menu"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dahsboard"));
const WebImage = lazy(() => import("./components/WebImage/WebImage"));

function App() {
  return (
    <AuthProvider>
      <EditableInfoProvider>
        <div className="mainDiv">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Menu" element={<Menu />} />
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
          </Suspense>
          <Footer />
        </div>
      </EditableInfoProvider>
    </AuthProvider>
  );
}

export default App;