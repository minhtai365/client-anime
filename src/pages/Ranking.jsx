import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CardAnime from '../componets/CardAnime';
import { getRankingApi } from '../custom/repositories/api.repository';
export default function Ranking() {
    const [arrRank, setArrRank] = useState([])
    const rank = useParams();
    useEffect(() => {
        async function fetchData() {
            let res = await getRankingApi().getDataInfo(`${rank.slug}?page=1`);
            if (res.success) {
                setArrRank(res.data);
            }
        }
        fetchData();
    }, [rank.slug])

    return (
        <div>
            {arrRank.length !== 0 ?
                <div className="container text-light">
                    <h5 className="mb-3">Anime top {rank.slug === 'nam' ? ' năm' : rank.slug === 'thang' ?
                        ' tháng' : rank.slug === 'tuan' ? ' tuần' : ' ngày'}</h5>
                    <CardAnime data={arrRank} />
                </div>
                : null}
        </div>
    )
}
