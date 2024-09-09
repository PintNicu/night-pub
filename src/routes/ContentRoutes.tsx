import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


const LazyHome = lazy(() => import("../pages/Home"));
const LazyAboutUs = lazy(() => import("../pages/AboutUs"));
const LazyMenu = lazy(() => import("../pages/Menu"));
const LazyGallery = lazy(() => import("../pages/Gallery"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyDashboard = lazy(() => import("../pages/Dahsboard"));
const LazyWebImage = lazy(() => import("../components/WebImage/WebImage"));

const routeConfigs = [
    { path: "/", component: LazyHome },
    { path: "/AboutUs", component: LazyAboutUs },
    { path: "/Menu", component: LazyMenu },
    { path: "/Gallery", component: LazyGallery },
    { path: "/Contact", component: LazyContact },
    {
        path: "/Dashboard",
        component: LazyDashboard,
        isPrivate: true
    },
    { path: "/images/zepelin-1929-cocktails.jpg", component: LazyWebImage },
];

const ContentRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>

        <Routes>
            {routeConfigs.map(({ path, component: Component, isPrivate }) => (

                <Route
                    key={path}
                    path={path}
                    element={
                        isPrivate ? (

                            <PrivateRoute>

                                <Component />

                            </PrivateRoute>
                        ) : (
                            <Component />
                        )
                    }
                />
            ))}
        </Routes>
    </Suspense>
);

export default ContentRoutes;