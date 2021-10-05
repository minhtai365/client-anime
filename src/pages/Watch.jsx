import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getAnimeInfoApi } from '../custom/repositories/api.repository';
import ReactPlayer from 'react-player'
import { API_URL, API_URL_SOURCE } from '../config/_index';
import Episodes from '../shared/Episodes';
import Recommended from '../shared/Recommended';
export default function Watch() {
    const [objSource, setObjSource] = useState(null);
    const anime = useParams();
    console.log(anime);
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeInfoApi().getDataInfo(anime.id + '/episodes/' + anime.index);
            console.log(res.data);
            if (res.success) {
                setObjSource(res.data);
            }
        }
        fetchData();
    }, [anime.slug])

    // const url='http://localhost:3000/'
    return (
        <div>
            <div className="container text-light">
                <ReactPlayer controls={true} playing={true} width="100%" height="70%"
                    url={objSource && `${API_URL_SOURCE}${objSource.videoSource}`} />
                <h6>{objSource && objSource.full_name}</h6>
                <div className="text-des mb-3">{objSource && objSource.views} lượt xem</div>
                <Episodes data={objSource && objSource.episodes} id={anime.id} />
                <Recommended />
            </div>

        </div>
    )
}
