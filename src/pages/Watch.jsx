import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { API_URL_SOURCE } from '../config/_index';
import { getAnimeInfoApi } from '../custom/repositories/api.repository';
import Episodes from '../shared/Episodes';
import Recommended from '../shared/Recommended';
import axios from 'axios';
export default function Watch() {
    const [objSource, setObjSource] = useState(null);
    const anime = useParams();

    const instance = axios.create({
        // baseURL: 'https://animetv-server.vercel.app/api/v1',
        // headers: {
        //     "X-Requested-With": "XMLHttpRequest",
        //     Referer: "https://vuighe.net/idoly-pride"
        // }

    });

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

    // const url='http://localhost:3000/'
    return (
        <div>
            <div className="container text-light">
                <ReactPlayer controls={true} playing={true} width="100%" height="70%"
                    url={objSource && `${objSource.videoSource}`} />
                <h6>{objSource && objSource.full_name}</h6>
                <div className="text-des mb-3">{objSource && objSource.views} lượt xem</div>
                <Episodes data={objSource && objSource.episodes} id={anime.id} />
                <Recommended />
            </div>

        </div>
    )
}
