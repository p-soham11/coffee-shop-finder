/** @format */

import { UserButton } from "@clerk/clerk-react";
import React from "react";

const TopBar = () => {
    return (
        <div className="h-full flex items-center gap-x-4 pt-5 pr-5 pb-5 pl-1 rounded-large max-h-[92px] bg-orange-300">
            <div className="hidden lg:flex lg:flex-1">Coffee Shop</div>
            <div className="block lg:hidden flex-1 text-xl font-semiboldbold">
                Coffee
            </div>
            <UserButton
                appearance={{
                    elements: {
                        avatarBox: "h-[36px] w-[36px]",
                    },
                }}
            />
        </div>
    );
};

export default TopBar;
