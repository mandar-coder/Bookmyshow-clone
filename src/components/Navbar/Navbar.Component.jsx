import {useState} from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import About from "../About/About.component"
import contact from "../Navbar/MovieNavbar.Component"


function NavSm() {

    // const [isOpen, setIsOpen] = useState(true)

    // const openAboutModal = () => {
    //     setOpenAbout(true);
    // }

    return (
        
        <>
            <div className="text-white bg-black flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
                        Delhi NCR <BiChevronDown />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    );
}

function NavMd() {
    return (
        <>
            <div className="w-full bg-black flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                <BiSearch />
                <input
                    type="search"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search for movies, events, plays, sports and activities"
                />
            </div>
        </>
    );
}

function NavLg() {
    return (
        <>
        {/* <About isOpen={openAbout} setIsOpen={setOpenAbout} /> */}
        <section className=" w-full bg-black ">
        <div className=" bg-black flex mx-auto py-3 px-4 items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="hidden lg:flex md:flex items-center gap-5">
                           <a href="About.html"> <button className="text-red-600 bg-transparent ">About</button></a>
                        </div>
                        <div className="hidden lg:flex md:flex items-center gap-5">
                        <a href="contact.html"><button className="text-red-600 bg-transparent">Contact Us</button></a>
                        </div>
                </div>
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for movies, events, plays, sports and activities"
                        />
                    </div>
                    <button className="bg-red-600 w-52 text-white px-4 py-1 text-lg rounded">
                        Logout
                    </button>
                </div>
            </div>
        </section>
        </>
    );
}

const Navbar = () => {
    return (
        <>
            <nav className="bg-darkBackground-700 px-4 py-3">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavMd />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
