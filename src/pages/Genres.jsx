import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CardAnime from '../componets/CardAnime';
import { getAnimeGenresApi } from '../custom/repositories/api.repository';
export default function Genres() {
    const [arrGenres, setArrGenres] = useState([])
    const rank = useParams();
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeGenresApi().getDataInfo(`${rank.slug}`);
            if (res.success) {
                setArrGenres(res.data);
            }
        }
        fetchData();
    }, [rank.slug])
    return (
        <div>
            {arrGenres.length !== 0 ?
                <div className="container text-light">
                    <h5 className="mb-3">Anime top {rank.slug === 'nam' ? ' năm' : rank.slug === 'thang' ?
                        ' tháng' : rank.slug === 'tuan' ? ' tuần' : ' ngày'}</h5>
                    <CardAnime data={arrGenres} />
                </div>
                : null}
        </div>
    )
}
