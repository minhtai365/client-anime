import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecentlyApi, getSlideApi } from '../custom/repositories/api.repository';
import Recommended from '../shared/Recommended';
import Pannel from '../componets/Pannel';
import './css/home.css';
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
        <div>{arrSlide.length !== 0 ?
            <div className="container">
                <div className="pannel">
                    <Pannel data={arrSlide} />
                </div>
                <h4 className="title text-light mb-3">
                    Mới cập nhật
                </h4>
                <div className="row">
                    {arrRecently.slice(0, 12).map((item, i) => {
                        return <Link key={i} to={'info/' + item.slug} className="col-6 col-md-3  h-150 mb-3">
                            <div className="home-card position-rel ">
                                <img className="home-bgimg radius-10" src={item.thumbnail} alt={item.name} />
                                <div className="position-abs abs-top-left p-1">
                                    <strong className="abs-top">{item.name}</strong>
                                </div>
                                <div className="row position-abs abs-bottom-left w-100 p-1">
                                    <p className="col-6 col-lg-7 text-small abs-name mb-1 ms-0 text-start">{item.latestEpisode.name}</p>
                                    <p className="col-6 col-lg-5 text-small p-0 mb-1">{item.latestEpisode.views} lượt xem</p>
                                </div>

                            </div>
                        </Link>
                    })}
                </div>
                <Recommended />
            </div>
            : null}</div>
    )
}
