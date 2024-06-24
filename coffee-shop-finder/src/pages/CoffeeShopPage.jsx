/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoffeeShopPage = () => {
    const { id } = useParams();
    const [shop, setShop] = useState(null);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/shop/${id}`
                );
                setShop(response.data);
            } catch (error) {
                console.error("Error fetching shop details:", error);
            }
        };

        fetchShop();
    }, [id]);

    if (!shop) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{shop.name}</h2>
            <p>{shop.locationName}</p>
            <h3 className="text-xl font-bold mt-4">Menu</h3>
            <ul>
                {shop.products.map((product) => (
                    <li key={product._id} className="border-b py-2">
                        <h4 className="font-bold">{product.name}</h4>
                        <p>₹ {product.price}</p>
                        <p>{product.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoffeeShopPage;
