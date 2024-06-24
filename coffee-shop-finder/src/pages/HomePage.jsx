/** @format */

import React from "react";
import LocationSearch from "../components/locationSearch";

const HomePage = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-gray-400 ">
            <h1 className="text-4xl">Welcome to Coffee Shop Finder!</h1>
            <h4 className="text-xl py-6">This is the Homepage!</h4>
            <LocationSearch />
        </div>
    );
};

export default HomePage;
