export const Header = () => {
    return (
        <header className="bg-white flex flex-row items-center justify-between py-4">
            <img src="images/logo2.jpeg" alt="The Pivot" className="w-40 "/>
            <nav className="flex space-x-6">
                <a href="#" className="text-black text-lg hover:text-[#F06621]">Home</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">About</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">2025 Edition</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">2024 Recap</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">Get Involved</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">Gallery</a>
                <a href="#" className="text-black text-lg hover:text-[#F06621]">Contact</a>
            </nav>
        </header>
    )
}