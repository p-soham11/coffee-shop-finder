/** @format */

import "./App.css";
import React from "react";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";
import Routes from "./routes";

import TopBar from "./components/TopBar";

function App() {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

    return (
        <header>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <TopBar />

                <Routes />
            </SignedIn>
        </header>
    );
}

export default App;
