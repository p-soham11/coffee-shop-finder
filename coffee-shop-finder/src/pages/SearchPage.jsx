/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
    const [shops, setShops] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const address = decodeURIComponent(params.get("location"));
        console.log(address);

        const fetchShops = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/shops/nearby?address=${address}`
                );
                setShops(response.data);
            } catch (error) {
                console.error("Error fetching coffee shops:", error);
            }
        };

        fetchShops();
    }, [location]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Nearby Coffee Shops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shops.map((shop) => (
                    <div
                        key={shop._id}
                        className="p-4 border border-gray-300 rounded"
                    >
                        <h3 className="text-xl font-bold">{shop.name}</h3>
                        <p>{shop.locationName}</p>
                        <button
                            onClick={() =>
                                (window.location.href = `/shop/${shop._id}`)
                            }
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                        >
                            View Menu
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
