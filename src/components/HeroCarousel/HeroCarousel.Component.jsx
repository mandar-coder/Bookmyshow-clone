import React, { useState } from "react";
import HeroSlider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Arrow components
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {

    const [images, setImage] = useState([
        "https://in.bmscdn.com/promotions/cms/creatives/1630432985528_incinemasthisfriday_shangchiandthelegendofthetenrings_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1630045372422_bellbottomunderthestarspvrdriveinexperience_webshowcase_1240x300.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    ]);

    const settingsLG = {
           arrows: true,
           autoplay: true,
           centerModel: true,
           centerPadding: '100px',
           slidToShow: 1,
           Infinite: true,
           slideToScroll: 1,
           nextArrow: <NextArrow />,
           prevArrow: <PrevArrow />,

    };

    const settings = {
        arrows: true,
        slidToShow: 1,
        Infinite: true,
        slideToScroll: 1,
        speed:500,
        nextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,

 };

    return(<>
        <div>
            <HeroSlider {...settingsLG}>
                {images.map((images) => (
                    <div className='w-full h-full md:h-80 py-3'>
                        <img src={images} alt='hero Banner' className='w-full h-full ali'/>                
                    </div>
                ))}
            </HeroSlider>
        </div>
    </>
    );
}

export default HeroCarousel;