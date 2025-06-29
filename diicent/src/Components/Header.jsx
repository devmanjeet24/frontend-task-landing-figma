import { useEffect, useState } from "react";
// import diccent from "../assets/Images/diicent.png"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY >= 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="w-full mx-auto bg-[#0C0F35] md:h-[139px] h-[60px] flex items-center justify-between">
                <div className="w-[1440px] flex items-center justify-between mx-auto">
                    <header className={`w-[90%] mx-auto px-6 py-4 flex items-center justify-between text-white z-50 transition-all duration-300 ${isFixed ? "fixed top-0 left-0 shadow-md" : "relative"}`}>
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                            <img src="/Images/diicent.png" alt="Logo" width={50} height={50} />
                        </div>

                        {/* Hamburger Icon */}
                        <div className="md:hidden flex flex-col gap-1 cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                            <div className={`h-1 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
                            <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                        </div>

                        {/* Navigation Links */}
                        <nav className={`flex flex-col md:flex-row md:static fixed top-0 right-0 bg-gray-700 md:bg-transparent h-screen md:h-auto w-[250px] md:w-auto items-start md:items-center gap-6 md:gap-8 px-6 py-24 md:p-0 transition-all duration-300 ${isOpen ? "right-0" : "right-[-250px]"}`}>
                            <a href="#" className="text-[20px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Home</a>
                            <a href="#" className="text-[20px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">About</a>
                            <a href="#" className="text-[20px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Services</a>
                            <a href="#" className="text-[20px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Contact</a>
                            <div className={`flex flex-col md:flex-row gap-6 md:gap-8 md:hidden`}>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Necklace</a>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Earing</a>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Pendant</a>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Ring</a>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Bangle</a>
                                <a href="#" className="text-[18px] font-normal font-Mulish text-white hover:text-cyan-400 transition-colors">Virasat</a>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="w-full mx-auto bg-[#CFB278] h-[54px] md:flex items-center justify-between hidden ">

                <nav className="md:flex justify-center items-center gap-6 w-full hidden">
                    <a href="#" className="text-[18px] font-normal text-white hover:text-cyan-400 transition-colors">Necklace</a>
                    <a href="#" className="text-[18px] font-normal  text-white hover:text-cyan-400 transition-colors">Earing</a>
                    <a href="#" className="text-[18px] font-normal  text-white hover:text-cyan-400 transition-colors">Pendant</a>
                    <a href="#" className="text-[18px] font-normal  text-white hover:text-cyan-400 transition-colors">Ring</a>
                    <a href="#" className="text-[18px] font-normal  text-white hover:text-cyan-400 transition-colors">Bangle</a>
                    <a href="#" className="text-[18px] font-normal  text-white hover:text-cyan-400 transition-colors">Virasat</a>
                </nav>

            </div>
        </>
    );
}

export default Navbar;