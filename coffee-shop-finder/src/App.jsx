/** @format */

import "./App.css";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";
import Routes from "./routes";

function App() {
    return (
        <header>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <Routes />
            </SignedIn>
        </header>
    );
}

export default App;
