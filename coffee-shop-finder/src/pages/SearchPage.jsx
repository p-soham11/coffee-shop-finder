/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
    const params = useParams();

    return (
        <div>
            <h2>Search Coffee Shops</h2>
            <p>Display search results for query: {params.query}</p>
        </div>
    );
};

export default SearchPage;
