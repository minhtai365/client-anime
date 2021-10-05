import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAnimeInfoApi } from '../custom/repositories/api.repository';
import Episodes from '../shared/Episodes';
import Recommended from '../shared/Recommended';
import './css/home.css';
import './css/info.css';
export default function Info() {
    const [objInfo, setObjInfo] = useState(null);
    const [showEpis, setShowEpis] = useState(false)
    const anime = useParams();
    let history = useHistory();
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeInfoApi().getDataInfo(anime.slug);
            // console.log(res.data);
            if (res.success) {
                setObjInfo(res.data);
            }
        }
        fetchData();
    }, [anime.slug])
    const watchAnime = (ani, index) => {
        history.push(`/watch/${ani.episodes[0].slug}/${ani.id}/${index}`);
    }
    return (
        <div>
            <div className="container text-light">
                <div className="anime-name">
                    <h4>{objInfo && objInfo.name}</h4>
                </div>
                <div className="ren-genres mb-3">
                    Thể loại :  {objInfo && objInfo.genres.map((item, i) => {
                        let hr = ' - ';
                        if (i === objInfo.genres.length - 1) {
                            hr = ''
                        }
                        return (
                            <Link className="genres-name" to={item.url}>{item.name} {hr}</Link>
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-3 position-relative p-0">
                        <div className="bg-image w-100" style={{
                            backgroundImage: `url(${objInfo && objInfo.thumbnail})`
                        }}></div>
                        <div className="content-bottom d-flex justify-content-around w-100">
                            <div className="mw-40 btn btn-success text-btn" onClick={() => setShowEpis(!showEpis)}>
                                Chọn tập
                            </div>
                            <div className="mw-40 btn btn-danger text-btn" onClick={() => watchAnime(objInfo, '0')}>
                                Xem ngay
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-md-block d-none position-relative">
                        <div className="blur-image bg-image" style={{
                            backgroundImage: `url(${objInfo && objInfo.thumbnail})`
                        }}></div>
                        <div className="content-center p-3">
                            {/* <h5>{objInfo && objInfo.name}</h5> */}
                            <p className="text-des">{objInfo && objInfo.description}</p>
                        </div>
                    </div>

                </div>
                <div className="d-block d-md-none mx-2 mt-3">
                    <h4>NỘI DUNG PHIM</h4>
                    <h5>{objInfo && objInfo.name}</h5>
                    <p>{objInfo && objInfo.description}</p>
                </div>
                {showEpis && <Episodes data={objInfo && objInfo.episodes} id={objInfo.id} />
                }

                {/* Hôm nay xem gì */}

                <Recommended />
            </div>
        </div >
    )
}
