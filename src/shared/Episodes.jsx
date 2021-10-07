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
                <div className="row">
                    {props.data && props.data.map((item, i) => {
                        return (
                            <Link key={i} className="col-12 col-md-6 my-2" to={`/watch/${item.slug}/${props.id}/${i}`} >
                                <div className="row ">
                                    <div className="col-5">
                                        <img className="w-100" src={item.thumbnail_medium} alt={item.full_name} />
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
