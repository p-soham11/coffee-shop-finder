/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const CoffeeShopPage = () => {
    const params = useParams();

    return (
        <div>
            <h2>Coffee Shop Details</h2>
            <p>Display details for coffee shop with ID {params.id}</p>
        </div>
    );
};

export default CoffeeShopPage;
