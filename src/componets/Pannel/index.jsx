import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import '../../pages/css/home.css'
export default function index(props) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        height: '300px'
    };
    return (
        <div>
            <Slider {...settings}>
                {props.data.map((item, i) => {
                    return (
                        <div key={i}>
                            <Link to={'/info/' + item.slug}>
                                <div className="position-relative">
                                    <div className="m-2 opacity-75" style={{
                                        backgroundImage: `url(${item.thumbnail})`, backgroundSize: 'cover',
                                        borderRadius: '15px', height: '300px'
                                    }}></div>
                                    <div className="position-abs abs-bottom mx-3 p-1 text-start">
                                        <div>
                                            {item.name}
                                        </div>
                                        {item.views}
                                        <div></div>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
