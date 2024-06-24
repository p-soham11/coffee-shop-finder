/** @format */

import "./App.css";
import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import Routes from "./routes";

import TopBar from "./components/TopBar";

function App() {
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
