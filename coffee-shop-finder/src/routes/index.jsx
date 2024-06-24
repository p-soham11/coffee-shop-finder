/** @format */

// routes/index.tsx

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoffeeShopPage from "../pages/CoffeeShopPage";
import SearchPage from "../pages/SearchPage";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/home",
            element: <HomePage />,
        },
        {
            path: "/shop/:id",
            element: <CoffeeShopPage />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
