import React from 'react';

function Arrow(props) {
    return (
        <button className={"button" + props.direction} onClick={props.onClick}>
            {props.direction}
        </button>
    );
}

export default Arrow;