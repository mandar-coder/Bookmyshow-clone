import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";

const DefaultLayout = (props) => {
    const {handleLogout} = props
    return(
        <div>
        <section className="Hero">
        <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-10 h-10">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                            <button className="text-white bg-transparent ">About</button>
                        </div>
                        <div className="flex items-center gap-5">
                            <button className="text-white bg-transparent">Contact Us</button>
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
                    <button onClick={handleLogout} className="bg-red-600 w-52 text-white px-4 py-1 text-lg rounded">
                        Logout
                    </button>
                </div>
            </div>
        </section>
        <div class="bg-gradient-to-t from-gray-700 via-gray-900 to-black">
           <HeroCarousel /> 
        </div>
        <div className='bg-black text-white text-center'>
               FOOTER
           </div>
</div>
    );
};



export default DefaultLayout;