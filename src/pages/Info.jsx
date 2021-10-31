import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAnimeInfoApi } from '../custom/repositories/api.repository';
import { getEpisodes } from '../reduxtoolkit/sliceReducer/dataSlice';
import Episodes from '../shared/Episodes';
import Recommended from '../shared/Recommended';
import {
    ShimmerThumbnail,
    ShimmerTitle,
    ShimmerText,
    ShimmerSectionHeader,
    ShimmerSimpleGallery
} from "react-shimmer-effects";
import './css/home.css';
import './css/info.css';
export default function Info() {
    const [objInfo, setObjInfo] = useState(null);
    const [showEpis, setShowEpis] = useState(false);
    const [isloading, setIsloading] = useState(true);
    const anime = useParams();
    const dispatch = useDispatch();
    // dispatch(getSlug(anime.slug));
    let history = useHistory();
    const epiRef = useRef(null)
    const executeScroll = () => epiRef.current.scrollIntoView()
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeInfoApi().getDataInfo(anime.slug);
            if (res.success) {
                setObjInfo(res.data);
                setIsloading(false);
                dispatch(getEpisodes(res.data.episodes));
            }
        }
        fetchData();
    }, [anime.slug, dispatch])
    useEffect(() => {
        setIsloading(true);
    }, [anime.slug])
    const watchAnime = (ani, index) => {
        history.push(`/watch/${ani.slug}/${ani.id}/${index}`);
    }
    return (
        <div>
            {/* {objInfo !== null ? */}
            <div className="container text-light">
                <div className="anime-name">
                    {(!isloading && objInfo && objInfo.name) ?
                        <h4 className='text-danger'>{objInfo && objInfo.name}</h4> :

                        <div className="col-md-3 col-9">
                            <ShimmerTitle line={1} className='w-100' variant="secondary" />
                        </div>
                    }
                </div>
                <div className="ren-genres mb-3">
                    {!isloading && objInfo ? <div> <span className="text-danger"> Thể loại :</span>
                        <span>{objInfo.genres.map((item, i) => {
                            let hr = ' - ';
                            if (i === objInfo.genres.length - 1) {
                                hr = ''
                            }
                            return (
                                <Link key={i} className="genres-name" to={item.url}>{item.name} {hr}</Link>
                            )
                        })}</span>
                    </div> :
                        <div className="col-md-6 col-12">
                            <ShimmerText line={1} className='w-100' />
                        </div>
                    }

                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-3 position-relative p-0">
                        {(!isloading && objInfo && objInfo.thumbnail) ?
                            <div>
                                <div className="bg-image w-100" style={{
                                    backgroundImage: `url(${objInfo && objInfo.thumbnail})`
                                }}></div>

                                <div className="content-bottom d-flex justify-content-around w-100">
                                    <div className="mw-40 btn btn-success text-btn" onClick={() => {
                                        if (!showEpis) {
                                            executeScroll();
                                        }
                                        setShowEpis(!showEpis);
                                    }
                                    } >
                                        Chọn tập
                                    </div>
                                    <div className="mw-40 btn btn-danger text-btn" onClick={() => watchAnime(objInfo, '0')}>
                                        Xem ngay
                                    </div>
                                </div>
                            </div>
                            : <ShimmerThumbnail height={300} className="m-0" rounded />
                        }
                    </div>
                    <div className="col-md-8 d-md-block d-none position-relative">
                        {(!isloading && objInfo && objInfo.thumbnail) ? <div>
                            <div className="blur-image bg-image" style={{
                                backgroundImage: `url(${objInfo && objInfo.thumbnail})`
                            }}></div>
                            <div className="content-center p-3">
                                {/* <h5>{objInfo && objInfo.name}</h5> */}
                                <p className="text-des">{objInfo && objInfo.description}</p>
                            </div>
                        </div> : <ShimmerThumbnail height={300} className="m-0" rounded />
                        }
                    </div>

                </div>
                <div ref={epiRef}>
                    {showEpis && <Episodes ref={epiRef} data={objInfo && objInfo.episodes} slug={objInfo.slug} id={objInfo.id} />}
                </div>

                <div className="d-block d-md-none mx-2 mt-3 col-12">
                    {!isloading ?
                        <div>
                            <h4>NỘI DUNG PHIM</h4>
                            <h5>{objInfo && objInfo.name}</h5>
                            <p>{objInfo && objInfo.description}</p>
                        </div>
                        : <ShimmerSectionHeader className="w-100" />
                    }
                </div>


                {/* Hôm nay xem gì */}

                {!isloading ? <Recommended /> :
                    <div>
                        <br />
                        <div className="col-md-3 col-9">
                            <ShimmerTitle line={1} className='w-100' variant="secondary" />
                        </div>
                        <div className="d-none d-md-block">
                            <ShimmerSimpleGallery card imageHeight={300} col={4} row={1} caption />
                        </div>
                        <div className="d-md-none d-block">
                            <ShimmerSimpleGallery card imageHeight={200} col={2} row={1} caption />
                        </div>
                    </div>
                }
            </div>
            {/* : null} */}
        </div>
    )
}
