
import React, { useState } from "react";
import clsx from "clsx";
import { HamburgerIcon } from "../../assets/svg/Icons";

// Section scroll positions based on viewport height multipliers
const SCROLL_POS: Record<string, number> = {
    Home: 0,
    About: 1.33,
    "2025 Edition": 3,
    "2024 Recap": 4.85,
    "Get Involved": 6.75,
    Gallery: 7.43,
    Contact: 10.5,
};

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (multiplier: number) => {
        const y = window.innerHeight * multiplier;
        window.scrollTo({ top: y, behavior: "smooth" });
        setIsOpen(false); // Close mobile menu after click
    };

    return (
        <header className="sticky top-0 z-50 bg-white flex flex-row items-center justify-between py-4 px-4 md:px-8">
            <img src="images/logo2.jpeg" alt="The Pivot" className="w-40" />

            {/* Hamburger menu toggle for mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-black focus:outline-none"
            >
                <HamburgerIcon />
            </button>

            {/* Navigation */}
            <nav
                className={clsx(
                    "flex-col md:flex-row md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out",
                    {
                        flex: isOpen,
                        hidden: !isOpen,
                    },
                    "space-y-4 md:space-y-0 md:space-x-6"
                )}
            >
                {Object.keys(SCROLL_POS).map((label) => (
                    <a
                        key={label}
                        href="#!"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo(SCROLL_POS[label]);
                        }}
                        className="text-black text-lg transition-colors duration-200 hover:text-[#F06621]"
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
};