import React from 'react'
import { Link } from 'react-router-dom'

import '../../pages/css/home.css'
export default function index(props) {
    return (
        <div>
            <div className="row">
                {props.data.slice(0, 12).map((item, i) => {
                    return <Link key={i} to={'/info/' + item.slug} className="col-6 col-md-3  h-150 mb-3">
                        <div className="home-card position-rel ">
                            <img className="home-bgimg radius-10" src={item.thumbnail} alt={item.name} />
                            <div className="position-abs abs-items-center">
                                <i className=" icon-35 far fa-play-circle"></i>
                            </div>
                            <div className="position-abs abs-top-left p-1">
                                <strong className="abs-top h-5">{item.name}</strong>
                            </div>
                            <div className="row position-abs abs-bottom-left w-100 p-1">
                                <p className="col-12 text-small abs-name mb-1 ms-0 text-start">{item.latestEpisode.name || item.name}</p>
                                <p className="col-12 text-small mb-1 ms-0 text-start">{item.latestEpisode.views || item.views} lượt xem</p>
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
