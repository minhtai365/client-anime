import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItem from '../ListItem';
import './header.css';
export default function Mobi() {
    const [showSubGen, setShowSubGen] = useState(false)
    const [showSubRank, setShowSubRank] = useState(false)
    let location = useLocation();
    return (
        <div className='mobi-box'>
            <div className="d-flex justify-content-around align-items-center">
                <div className={location.pathname.indexOf('/anime/') === 0 ?
                    "active-parent mobi-genres par-item" : "mobi-genres par-item"}
                    onClick={() => {
                        setShowSubGen(!showSubGen);
                        setShowSubRank(false);
                    }
                    } >
                    <i className="fas fa-film"></i>
                    <p>Thể loại</p>
                    {showSubGen &&
                        <div className="list-par navi">
                            <ListItem type="anime" />
                        </div>
                    }
                </div>
                <Link className="link-no-dec  mobi-home par-item" to={'/'}>

                    <div className={location.pathname === "/" ? "active-parent" : ""}>
                        <i className="fas fa-home"></i>
                        <p>Trang chủ</p>
                    </div>
                </Link>

                <div className={location.pathname.indexOf('/ranking/') === 0 ?
                    "active-parent mobi-ranking par-item" : "mobi-ranking par-item"}
                    onClick={() => {
                        setShowSubGen(false);
                        setShowSubRank(!showSubRank);
                    }
                    } >
                    <i className="fas fa-chart-bar"></i>
                    <p>Xếp hạng</p>
                    {showSubRank && <div className="list-par navi">
                        <ListItem type="ranking" />
                    </div>
                    }
                </div>
            </div>
        </div >
    )
}
