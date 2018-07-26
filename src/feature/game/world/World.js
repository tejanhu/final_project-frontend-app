import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

function World(props){
    return(
        <div
        style={{
            backgroundColor:"#78AB46",
            height: '100%',
            width: '100%,'
        }}
        >
            <Map />
            <Player position={props.position}/>
        </div>

    )
}
export default World;