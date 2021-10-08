import React from 'react';
import { Link } from 'react-router-dom';
import '.././pages/css/info.css';
// import { getAnimeInfoApi } from '../custom/repositories/api.repository';
export default function Episodes(props) {
    // const [arrEpisodes, setArrEpisodes] = useState([])
    // useEffect(() => {
    //     async function fetchData() {
    //         let res = await getAnimeInfoApi().getDataInfo(props.id + '/episodes');
    //         console.log(res.data);
    //         if (res.success) {
    //             setArrEpisodes(res.data);
    //         }
    //     }
    //     fetchData();
    // }, [props.id])
    console.log(props.data);
    return (
        <div>
            <div className="episodes ms-md-5 mt-3">
                <h4>
                    Danh sách tập
                </h4>
                <div className="row container-epi ">
                    {props.data && props.data.map((item, i) => {
                        return (
                            <Link key={i} className="col-12 col-md-6 my-2" to={`/watch/${props.slug}/${props.id}/${i}`} >
                                <div className="row ">
                                    <div className="col-5 position-relative epi-box">
                                        <img className="w-100 epi-img" src={item.thumbnail_medium} alt={item.full_name} />
                                        <div className="position-abs abs-items-center">
                                            <i className="icon-35 far fa-play-circle"></i>
                                        </div>
                                    </div>
                                    <div className="col-7 position-relative">
                                        <div className="content-center text-des">
                                            <h6>{item.full_name}</h6>
                                            <div>{item.views} lượt xem</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
