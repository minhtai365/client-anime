import React, { useEffect, useState } from 'react';
import CardAnime from '../componets/CardAnime';
import Pannel from '../componets/Pannel';
import { getRecentlyApi, getSlideApi } from '../custom/repositories/api.repository';
import Recommended from '../shared/Recommended';
import './css/home.css';
import {
    ShimmerThumbnail,
    ShimmerSimpleGallery
} from "react-shimmer-effects";
export default function Home() {
    const [arrRecently, setArrRecently] = useState([]);
    const [arrSlide, setArrSlide] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let res = await getRecentlyApi().getData();
            if (res.success) {
                setArrRecently(res.data);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        async function fetchData() {
            let res = await getSlideApi().getData();
            if (res.success) {
                setArrSlide(res.data);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="pannel">
                    {arrSlide.length !== 0 ?
                        <Pannel data={arrSlide} /> :
                        <div>
                            <ShimmerThumbnail height={300} className="m-0" rounded />
                        </div>
                    }
                </div>
                <h4 className="title text-light mb-3">
                    Mới cập nhật
                </h4>
                {/* <div className="row">
                    {arrRecently.slice(0, 12).map((item, i) => {
                        return <Link key={i} to={'info/' + item.slug} className="col-6 col-md-3  h-150 mb-3">
                            <div className="home-card position-rel ">
                                <img className="home-bgimg radius-10" src={item.thumbnail} alt={item.name} />
                                <div className="position-abs abs-items-center">
                                    <i className=" icon-35 far fa-play-circle"></i>
                                </div>
                                <div className="position-abs abs-top-left p-1">
                                    <strong className="abs-top h-5">{item.name}</strong>
                                </div>
                                <div className="row position-abs abs-bottom-left w-100 p-1">
                                    <p className="col-12 text-small abs-name mb-1 ms-0 text-start">{item.latestEpisode.name}</p>
                                    <p className="col-12 text-small mb-1 ms-0 text-start">{item.latestEpisode.views} lượt xem</p>
                                </div>
                            </div>
                        </Link>
                    })}
                </div> */}
                {arrRecently.length !== 0 ?
                    <CardAnime data={arrRecently} />
                    :
                    <div>
                        <div className="d-none d-md-block">
                            <ShimmerSimpleGallery imageHeight={150} col={4} row={3} />
                        </div>
                        <div className="d-md-none d-block">
                            <ShimmerSimpleGallery imageHeight={150} col={2} row={6} />
                        </div>
                    </div>
                }
                <Recommended />
            </div>
        </div>
    )
}
