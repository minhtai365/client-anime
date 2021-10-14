import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CardAnime from '../componets/CardAnime';
import { getAnimeGenresApi } from '../custom/repositories/api.repository';
import { GENRES } from '../shared/constants';
export default function Genres() {
    const [arrGenres, setArrGenres] = useState([])
    const genres = useParams();
    useEffect(() => {
        async function fetchData() {
            let res = await getAnimeGenresApi().getDataInfo(`${genres.slug}`);
            if (res.success) {
                setArrGenres(res.data);
            }
        }
        fetchData();
    }, [genres.slug])
    return (
        <div>
            {arrGenres.length !== 0 ?
                <div className="container text-light">
                    {GENRES.filter(item => item.slug === genres.slug).map((gen, i) => {
                        return <h6 className="mb-3 text-uppercase">Thể Loại {gen.name}</h6>
                    })}
                    <CardAnime data={arrGenres} />
                </div>
                : null}
        </div>
    )
}
