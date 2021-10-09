import React from 'react';
import './header.css';
import { useLocation, Link } from 'react-router-dom';
import ListItem from '../ListItem'
export default function Header() {
    let location = useLocation();
    console.log(location.pathname.indexOf('/genres/'));
    console.log(location);
    return (
        <div className="text-light my-header text-center position-relative">
            {/* <li><Link to='/' className="nav-link"> Home </Link></li>
                    <li><Link to='/upload' className="nav-link">Contact</Link></li>
                    <li><Link to='/read-page' className="nav-link">Get-Link</Link></li> */}
            <div className="w-100 d-flex justify-content-around align-items-center header-box">
                <div className="d-flex">
                    <Link className="d-flex logo " to={'/'}>
                        <h3 className=" text-danger d-flex">Ani<span className="text-success">◕‿‿◕</span>E</h3>
                    </Link>
                    <div className="menu d-none d-md-block">
                        <ul className="d-flex box-item">
                            <Link className={location.pathname === "/" ? "active-parent item-parent" : "item-parent"} to={'/'}><li >Trang chủ</li></Link>
                            <li className={location.pathname.indexOf('/genres/') === 0 ? "active-parent expan-menu item-parent" : "item-parent expan-menu"}>Thể loại
                                <div className="list-item">
                                    <ListItem type="genres" />
                                </div>
                            </li>
                            <li className={location.pathname.indexOf('/ranking/') === 0 ? "active-parent expan-menu item-parent" : "item-parent expan-menu"}>Xếp hạng
                                <div className="list-item">
                                    <ListItem type="ranking" />
                                </div></li>
                        </ul>
                    </div>
                </div>
                <div className="form-search">
                    <form className="form-inline d-flex">
                        <div className="form-group me-1">
                            <input type="text" name="search" className="form-control text-search" placeholder="Search..." />
                        </div>
                        <div className="box-search"><i className="fas fa-search btn-search"></i></div>
                    </form>
                </div>

            </div>
            {/* // <ListItem /> */}

        </div>
    )
}
