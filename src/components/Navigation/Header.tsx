import { useState } from "react";
import { HamburgerIcon } from "../../assets/svg/Icons"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white flex flex-row items-center justify-between py-4 ">
            {/* <div className="flex flex-row items-center justify-between py-4 "> */}
                <img src="images/logo2.jpeg" alt="The Pivot" className="w-40 "/>
                {/* Hamburger toggle for mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden sticky top-0 text-black focus:outline-none"
                >
                    <HamburgerIcon />
                </button>
            {/* </div> */}

            {/* Navigation menu */}
            <nav
                className={`
                flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6
                absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 md:shadow-none transition-all duration-300 ease-in-out
                ${isOpen ? "flex" : "hidden"}
                `}
            >
                {["Home", "About", "2025 Edition", "2024 Recap", "Get Involved", "Gallery", "Contact"].map((item) => (
                <a
                    key={item}
                    href="#"
                    className="text-black text-lg hover:text-[#F06621]"
                >
                    {item}
                </a>
                ))}
            </nav>
        </header>
    )
}

// export const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow-md">
//             {/* Top section with logo and hamburger */}
//             <div className="flex flex-row items-center justify-between py-4 px-4 md:px-8">
//                 <img src="images/logo2.jpeg" alt="The Pivot" className="w-40" />

//                 {/* Hamburger toggle for mobile */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="md:hidden text-black focus:outline-none"
//                 >
//                     <HamburgerIcon />
//                 </button>
//             </div>

//             {/* Mobile nav (visible when toggled) */}
//             <nav
//                 className={`flex flex-col md:hidden transition-all duration-300 ease-in-out px-4 overflow-hidden ${
//                     isOpen ? "max-h-screen py-4" : "max-h-0"
//                 }`}
//             >
//                 {["Home", "About", "2025 Edition", "2024 Recap", "Get Involved", "Gallery", "Contact"].map((item) => (
//                     <a
//                         key={item}
//                         href="#"
//                         className="text-black text-lg hover:text-[#F06621] py-1"
//                     >
//                         {item}
//                     </a>
//                 ))}
//             </nav>

//             {/* Desktop nav */}
//             <nav className="hidden md:flex flex-row space-x-6 px-8 py-2">
//                 {["Home", "About", "2025 Edition", "2024 Recap", "Get Involved", "Gallery", "Contact"].map((item) => (
//                     <a
//                         key={item}
//                         href="#"
//                         className="text-black text-lg hover:text-[#F06621]"
//                     >
//                         {item}
//                     </a>
//                 ))}
//             </nav>
//         </header>
//     );
// };