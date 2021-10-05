import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import '../../pages/css/home.css'
export default function index(props) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        // initialSlide: 0,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {props.data.map((item, i) => {
                    return (
                        <div key={i}>
                            <Link to={'/info/' + item.slug}>
                                <div className="position-relative">
                                    <div className="m-2 opacity-75 radius-10" style={{ backgroundImage: `url(${item.thumbnail})`, height: '150px' }}></div>
                                    <div className="position-abs abs-bottom mx-3 p-1 text-small text-start">
                                        <div>
                                            {item.name}
                                        </div>
                                        {item.views} lượt xem
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
