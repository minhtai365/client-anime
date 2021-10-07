import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAnimeInfoApi } from '../custom/repositories/api.repository';
import { getEpisodes } from '../reduxtoolkit/sliceReducer/dataSlice';
import Episodes from '../shared/Episodes';
import Recommended from '../shared/Recommended';
export default function Watch() {
    const [objSource, setObjSource] = useState(null);
    const anime = useParams();
    const dispatch = useDispatch();
    let episodes = useSelector(state => state.getdata.episodes);
    // if (episodes.length === 0) {
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeInfoApi().getDataInfo(localStorage.getItem('anime-slug'));
            if (res.success) {
                episodes = res.data.episodes
                dispatch(getEpisodes(res.data.episodes));
            }
        }
        fetchData();
    }, [dispatch])
    // }

    // const instance = axios.create({
    //     // baseURL: 'https://animetv-server.vercel.app/api/v1',
    //     // headers: {
    //     //     "X-Requested-With": "XMLHttpRequest",
    //     //     Referer: "https://vuighe.net/idoly-pride"
    //     // }

    // });

    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeInfoApi().getDataInfo(anime.id + '/episodes/' + anime.index);
            // let res = await instance.get('anime/' + anime.id + '/episodes/' + anime.index);
            console.log(res);
            if (res.success) {
                setObjSource(res.data);
            }
        }
        fetchData();
    }, [anime.slug, anime.id, anime.index])


    return (
        <div>
            {objSource !== null ?
                <div className="container text-light">
                    <ReactPlayer controls={true} playing={true} width="100%" height="70%"
                        url={objSource && `${objSource.videoSource}`} />
                    <h6>{objSource && objSource.full_name}</h6>
                    <div className="text-des mb-3">{objSource && objSource.views} lượt xem</div>
                    <Episodes data={episodes} id={anime.id} />
                    <Recommended />
                </div>
                : null}</div >
    )
}
