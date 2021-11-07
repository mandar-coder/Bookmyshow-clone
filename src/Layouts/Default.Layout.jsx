import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
import MovieFooter from "../components/Footer/MovieFooter.component";

const DefaultLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <MovieFooter />
        </div>
    );
};

export default DefaultLayout;
