import React from 'react'
// import ReactTooltip from 'react-tooltip';
export default function index() {
    return (
        <div>
            <a
              data-for="main"
              data-tip="Hello<br />multiline<br />tooltip"
              data-iscapture="true"
            >
            </a>
            {/* <ReactTooltip
            id="main"
            // place={place}
            // type={type}
            // effect={effect}
            // multiline={true}
          /> */}
        </div>
    )
}
