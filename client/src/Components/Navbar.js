"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../Layouts/Navbar";
import { cn } from "../Helpers/utils";

function Navbar({ className }) {
    const [active, setActive] = useState(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Features">
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Banner">
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="About">
                </MenuItem>

            </Menu>
        </div>
    );
}

export default Navbar;