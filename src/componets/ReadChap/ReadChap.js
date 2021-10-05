import React, { useEffect, useState } from 'react'
import { getLinkApi } from '../../custom/repositories/api.repository';
import { useParams } from 'react-router-dom';
import './ReadChap.css';
export default function ReadChap() {

    const [link, setLink] = useState('');
    const [arrChap, setArrChap] = useState([]);
    const [chap, setChap] = useState('');
    const [totalChap, setTotalChap] = useState(0)
    let { slug } = useParams();
    useEffect(() => {
        setChapStory(slug);
    }, []);

    const setChapStory = async (link) => {
        let res = await getLinkApi().getLink({ linkget: link });
        if (res.status) {
            setArrChap(res.data);
            setChap(res.chap);
            setTotalChap(res.totalChap);
            setLink(link);
        }
    }
    const changeChap = async (type) => {
        let newLink;
        if (!type) {
            newLink = link.replace(chap, chap - 1)
        }
        else {
            newLink = link.replace(chap, chap + 1)
        }
        setChapStory(newLink);
    }
    const selectChap = async (e) => {
        let newLink = link.replace(chap, e.target.value)
        setChapStory(newLink);
    }
    useEffect(() => {
        try {
            // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (error) {
            // just a fallback for older browsers
            window.scrollTo(0, 0);
        }
    }, [chap]);
    return (
        <div className="box-content">
            {arrChap.length !== 0 && <div>
                <div className="box-top-fixed">
                    <div className="prev-next">
                        <span className="btn-prev btn-chap">
                            <button onClick={() => changeChap(false)} type="button">Prev</button>
                        </span>
                        <span className="cur-chap btn-chap">
                            <select value={chap} onChange={(e) => selectChap(e)}>
                                {Array(totalChap).fill(1).map((chaps, i) => {
                                    return <option value={i + 1}>Chap {i + 1}</option>
                                }).reverse()
                                }
                            </select>
                        </span>
                        <span className="btn-next btn-chap">
                            {chap === totalChap && <button type="button" disabled >Next</button>}
                            {chap !== totalChap && <button onClick={() => changeChap(true)} type="button" >Next</button>}
                        </span>
                    </div>
                </div>
                <div className="box-img">
                    {arrChap.map((item, i) => {
                        return <img key={i} src={item.src} alt={item.alt} />
                    })}
                </div>
            </div>
            }
        </div>
    )
}
