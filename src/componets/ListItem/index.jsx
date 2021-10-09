import React from 'react';
import { Link } from 'react-router-dom';
import { GENRES, RANKINGS } from '../../shared/constants';
import '../Header/header.css'
export default function Index(props) {
  let data = GENRES;
  if (props.type === 'ranking') data = RANKINGS;

  return (
    <div className="text-light">
      <div className="row text-start">
        {data.map((item, i) => {
          return (
            <Link key={i} className="col-6 sub-menu" to={'/' + props.type + '/' + item.slug}>{item.name}</Link>
          )
        })}
      </div>
    </div>
  )
}
