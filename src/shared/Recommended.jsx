import React, { useEffect, useState } from 'react';
import Slider from '../componets/Slider';
import { getRecommendedApi } from '../custom/repositories/api.repository';

export default function Recommended() {
    const [recommended, setRecommended] = useState([])
    useEffect(() => {
        async function fetchData() {
            let res = await getRecommendedApi().getData();
            if (res.success) {
                setRecommended(res.data);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <h4 className="mt-3 text-light">Anime nổi bật</h4>
            <Slider data={recommended} />
        </div>
    )
}
