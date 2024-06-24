/** @format */

import React from "react";
import LocationSearch from "../components/locationSearch";

const HomePage = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
    return (
        <div className="w-screen h-[919px] flex flex-col items-center  bg-blue-gray-400 ">
            <h1 className="text-4xl mt-[180px]">
                Welcome to Coffee Shop Finder!
            </h1>
            <h4 className="text-xl py-6">This is the Homepage!</h4>
            <LocationSearch />
        </div>
    );
};

export default HomePage;
