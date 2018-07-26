import React from 'react';
import './arrow.css';

function Arrow(props) {
    return (
        <button className={"button" + props.direction} onClick={props.onClick}>
            {props.direction}
        </button>
    );
}

export default Arrow;