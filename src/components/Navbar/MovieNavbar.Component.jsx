import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import About from "../About/About.component";
//Context
import { MovieContext } from "../../context/Movie.context";

function NavSm() {
    const { movie } = useContext(MovieContext);

    return (
        <>
            <div className="text-gray-700 flex items-center justify-between ">
                <div>
                    <h3 className="text-xl font-bold ">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );
}

function NavLg() {
    return (
        <>
            <section className="Hero w-full">
        <div className="container bg-black py-3 flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-10 h-10">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="hidden lg:flex md:flex items-center gap-5">
                            <a href=""><button className="text-red-600 bg-transparent  ">About</button></a>
                        </div>
                        <div className="hidden lg:flex md:flex items-center gap-5">
                        <a href="contact.html"><button className="text-red-600 bg-transparent " > Contact Us</button></a>
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

const MovieNavbar = () => {
    return (
        <>
            <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4 ">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavSm />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;
