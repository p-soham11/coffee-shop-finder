/** @format */

import React, { useState, useEffect, useRef } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"];
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const LocationSearch = () => {
    const [searchBox, setSearchBox] = useState(null);
    const [places, setPlaces] = useState([]);

    const onLoad = (ref) => {
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        setPlaces(places);
    };

    useEffect(() => {}, []);

    return (
        <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
            <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}
            >
                <input
                    type="text"
                    placeholder="Search for a place"
                    style={{
                        boxSizing: "border-box",
                        border: "1px solid transparent",
                        width: "240px",
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                        fontSize: "14px",
                        outline: "none",
                        textOverflow: "ellipses",
                    }}
                />
            </StandaloneSearchBox>
            <div>
                {places.map((place, index) => (
                    <div key={index}>
                        <strong>{place.name}</strong>
                        <br />
                        {place.formatted_address}
                    </div>
                ))}
            </div>
        </LoadScript>
    );
};

export default LocationSearch;
