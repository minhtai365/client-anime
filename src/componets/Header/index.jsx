import _debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { getSearchApi } from '../../custom/repositories/api.repository';
import ListItem from '../ListItem';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import Mobi from './Mobi'
export default function Header() {
    let location = useLocation();
    // const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(false);
    const [arrResult, setArrResult] = useState([]);
    let path = useLocation();
    function handleChange(e) {
        const { value } = e.target;
        // setSearch(value);
        if (value.trim() !== '') {
            debounceSearch(value);
        }
        else {
            setVisible(false);
        }
    }
    useEffect(() => {
        setVisible(false);
    }, [path.pathname])
    const debounceSearch = useCallback(_debounce((value) => {// eslint-disable-line react-hooks/exhaustive-deps
        fetchData(value)
    }, 1500), []);
    async function fetchData(value) {
        let res = await getSearchApi().getDataSearch(value);
        if (res.success) {
            setArrResult(res.data);
            // dispatch(getEpisodes(res.data.episodes));
        }
    }
    // useEffect(() => {

    // }, [search])
    return (
        <div className="text-light my-header text-center position-relative">
            <div className="w-100 d-flex justify-content-around align-items-center header-box">
                <div className="d-flex">
                    <Link className="d-flex logo " to={'/'}>
                        <h3 className=" text-danger d-flex">Ani<span className="text-success">◕‿‿◕</span>E</h3>
                    </Link>
                    <div className="menu d-none d-md-block">
                        <ul className="d-flex box-item">
                            <Link className={location.pathname === "/" ? "active-parent item-parent" : "item-parent"} to={'/'}><li >Trang chủ</li></Link>
                            <li className={location.pathname.indexOf('/anime/') === 0 ? "active-parent expan-menu item-parent" : "item-parent expan-menu"}>Thể loại
                                <div className="list-item">
                                    <ListItem type="anime" />
                                </div>
                            </li>
                            <li className={location.pathname.indexOf('/ranking/') === 0 ? "active-parent expan-menu item-parent" : "item-parent expan-menu"}>Xếp hạng
                                <div className="list-item">
                                    <ListItem type="ranking" />
                                </div></li>
                        </ul>
                    </div>
                </div>
                <div className="form-search position-relative">
                    <form className="form-inline d-flex">
                        <div className="form-group me-1">
                            <input type="text" name='search' onClick={() => setVisible(true)} onChange={handleChange} className="form-control text-search" placeholder="Search..." />
                        </div>
                        <div className="box-search"><i className="fas fa-search btn-search"></i></div>
                    </form>
                    {visible && <div className="result-search">
                        <div className="">
                            {/* <div className="row"> */}
                            {arrResult.length !== 0 && arrResult.map((item, i) => {
                                return (
                                    <Link className="item-result" onClick={() => setVisible(false)} to={'/info/' + item.slug}>
                                        <div key={i} className="row box-item-result my-1 text-dark">
                                            <div className="col-5 ps-3 position-relative">
                                                <img className="img-result" src={item.thumbnail} alt={item.name} />
                                                <div className="position-abs abs-items-center ps-3">
                                                    <i className=" icon-25 far fa-play-circle"></i>
                                                </div>
                                            </div>
                                            <div className="col-7 box-detail-result">
                                                <p className="text-detail-result name-detail-result">{item.name}</p>
                                                <p className="text-detail-result">{item.time}</p>
                                                <p className="text-detail-result">{item.views} lượt xem</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                            {/* </div> */}
                        </div>
                    </div>}
                </div>

            </div>
            {/* // <ListItem /> */}
            <Mobi />
        </div>
    )
}
