import React, { useContext } from "react";

//Context
import { MovieContext } from "../../context/Movie.context";

function Footer() {
    const { movie } = useContext(MovieContext);

    return (
        <>
          <div className='bg-black align-middle text-white text-center w-full'>
        <section class="inline-block py-12 text-center text-md text-red-700">
        <div class=" justify-center  flex gap-2 text-center py-5 text-red-700">
            <a href="#"><i class="fab w-3 fa-instagram"></i></a>
            <a href="#"><i class="fab fa-snapchat"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
        </div>

        <div class=" flex gap-7 text-center">
            <li>
                <a href="index.html" className="text-md w-10 h-10 inline-block text-center rounded-lg my-1 ">Home</a>
            </li>
            <li>
                <a href="contact.html" className="text-md w-10 h-10 inline-block text-center rounded-lg my-1 ">Contact</a>
            </li>
            <li>
                <a href="About.html" className="text-md w-10 h-10 inline-block text-center rounded-lg my-1 ">About</a>
            </li>
            <li>
                <a className="text-md w-10 h-10 inline-block text-center rounded-lg my-1 ">Terms</a>
            </li>
            
        </div>
        <p class="copyright">
                BackBenchers @2021
            
            </p>
    </section>
           </div>
        </>
    );
}

const MovieFooter = () => {
    return (
        <>
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <Footer />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/* Medium/Tab Screen */}
                    <Footer />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <Footer />
                </div>
        </>
    );
};

export default MovieFooter;