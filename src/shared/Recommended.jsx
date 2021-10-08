import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../componets/Slider';
import { getRecommendedApi } from '../custom/repositories/api.repository';
import { getRecommended } from '../reduxtoolkit/sliceReducer/dataSlice';
export default function Recommended() {
    // const [recommended, setRecommended] = useState([])
    const dispatch = useDispatch();
    let recommend = useSelector(state => state.getdata.recommend);
    // useEffect(() => {
    async function fetchData() {
        let res = await getRecommendedApi().getData();
        if (res.success) {
            // setRecommended(res.data);
            recommend=res.data
            dispatch(getRecommended(res.data));
        }
    }
    if (recommend.length === 0)
        fetchData();
    // }, [recommend.length == 0])

    return (
        <div>
            <h4 className="mt-3 text-light">Anime nổi bật</h4>
            <Slider data={recommend} />
        </div>
    )
}
