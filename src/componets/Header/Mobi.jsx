import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItem from '../ListItem';
import './header.css';
export default function Mobi() {

    let location = useLocation();
    return (
        <div className='mobi-box'>
            <div className="d-flex justify-content-around align-items-center">
                <div className={location.pathname.indexOf('/anime/') === 0 ? "active-parent mobi-genres par-item" : "mobi-genres par-item"} >
                    <i className="fas fa-film"></i>
                    <p>Thể loại</p>
                    <div className="list-par navi">
                        <ListItem type="anime" />
                    </div>
                    {/* <div className="list-item expan-menu">
                        <ListItem type="anime" />
                    </div> */}
                </div>
                <Link className="link-no-dec  mobi-home par-item" to={'/'}>

                    <div className={location.pathname === "/" ? "active-parent" : ""}>
                        <i className="fas fa-home"></i>
                        <p>Trang chủ</p>
                    </div>
                </Link>

                <div className={location.pathname.indexOf('/ranking/') === 0 ? "active-parent mobi-ranking par-item" : "mobi-ranking par-item"} >
                    <i className="fas fa-chart-bar"></i>
                    <p>Xếp hạng</p>
                    <div className="list-par navi">
                        <ListItem type="ranking" />
                    </div>
                </div>
            </div>
            {/* <div className="menu">
                    <ul className="d-flex box-item">
                        <Link className={"item-parent"} to={'/'}><li >Trang chủ</li></Link>
                        <li className={"item-parent expan-menu"}>Thể loại
                            <div className="list-item">
                                <ListItem type="anime" />
                            </div>
                        </li>
                        <li className={"item-parent expan-menu"}>Xếp hạng
                            <div className="list-item">
                                <ListItem type="ranking" />
                            </div></li>
                    </ul>
                </div> */}
        </div >
    )
}
