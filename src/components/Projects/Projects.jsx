import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Projects.css';

import slider_images from '../../images/slider.jpg';
import web from '../../images/webapps.png';
import web2 from '../../images/webapps2.png';
import mobile from '../../images/mobileapps.png';


import project1 from '../../images/p1.png'
import project2 from '../../images/p2.png'
import project3 from '../../images/p3.webp'
import project4 from '../../images/p4.webp'
import project5 from '../../images/p5.webp'


export const Projects = () => {
    const [currentImage, setCurrentImage] = useState(slider_images); // Initial background image

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "40px",
        autoplaySpeed: 3000,
        beforeChange: (oldIndex, newIndex) => {
            const images = [slider_images, web, web2, slider_images];
            setCurrentImage(images[newIndex]); // Set the background image
        }
    };

    const slides = [
        { id: 1, image: slider_images, title: "Yosemite National Park" },
        { id: 2, image: web, title: "Los Lances Beach" },
        { id: 3, image: web2, title: "Göreme Valley" },
        { id: 4, image: slider_images, title: "Saint Antönien" },
    ];

    return (
        <>
            <div className='projects'>
                <h1>Our Recent Projects</h1>
                <p>We don't just Promise, but Indeed Deliver!</p>
            </div>

            <div className='main_container5'>
                <div
                    className="carousel-container"
                    style={{ backgroundImage: `url(${currentImage})` }} // Background image style
                >
                    <div className="overlay"> {/* Optional overlay for styling */}
                        <Slider {...settings}>
                            {slides.map((slide) => (
                                <div key={slide.id} className="thumbnail">
                                    <img src={slide.image} alt={slide.title} />
                                    <div className="slide-title">
                                        <h3>{slide.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>




            <div className="grid_container">
                <div className="grid_item "><img src={project1} alt="Image 1" /></div>
                <div className="grid_item grid_item_large "><img src={project2} alt="Image 2" /></div>
                <div className="grid_item "><img src={project3} alt="Image 3" /></div>
                <div className="grid_item"><img src={project4} alt="Image 4" /></div>
                <div className="grid_item"><img src={project5} alt="Image 5" /></div>
            </div>

        </>


    );
}
