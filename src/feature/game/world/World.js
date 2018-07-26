import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

function World(props){
    return(
        <div
        style={{
            height: '240px',
            width: '520px',
            backgroundColor:"#78AB46",
            padding: '0 auto',
        }}
        >
            <Map />
            <Player position={props.position}/>
        </div>

    )
}
export default World;