import React from 'react';
import './arrow.css';

function Arrow(props) {
    return (
        <div className={"button" + props.direction + " arrow"} onClick={props.onClick}>
        </div>
    );
}

export default Arrow;