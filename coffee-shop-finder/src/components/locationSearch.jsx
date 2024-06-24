/** @format */

import React, { useState, useEffect, useRef } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const libraries = ["places"];
const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const LocationSearch = () => {
    const [searchBox, setSearchBox] = useState(null);
    const [places, setPlaces] = useState([]);
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (searchBox) {
            searchBox.addListener("places_changed", onPlacesChanged);
        }
    }, [searchBox]);

    const onLoad = (ref) => {
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        const selectedPlace = searchBox.getPlaces()[0];
        if (selectedPlace) {
            setLocation(selectedPlace.formatted_address);
        }
    };

    const searchEvent = () => {
        console.log(location);
        if (location) {
            // Encode the location for URL
            const encodedLocation = encodeURIComponent(location);
            // Redirect to search page with location in query parameter
            navigate(`/search?location=${encodedLocation}`);
        }
    };

    return (
        <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
            <StandaloneSearchBox onLoad={onLoad}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a location (Kolkata)"
                        style={{
                            boxSizing: "border-box",
                            border: "1px solid transparent",
                            width: "540px",
                            height: "54px",
                            padding: "0 12px",
                            borderRadius: "16px",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                            fontSize: "14px",
                            outline: "none",
                            textOverflow: "ellipsis",
                        }}
                    />
                    <Button
                        color="amber"
                        className="h-[54px] ml-7"
                        onClick={searchEvent}
                    >
                        Search 🔍
                    </Button>
                </div>
            </StandaloneSearchBox>
        </LoadScript>
    );
};

export default LocationSearch;
