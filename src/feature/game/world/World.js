import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

function World(props){
    console.log("in world props.tiles is : " + props.tiles)
    return(
        <div
        style={{
            height: '240px',
            width: '520px',
            backgroundColor:"#78AB46",
            padding: '0 auto',
        }}
        >
            <Map tiles={props.tiles}/>
            <Player position={props.position} spriteLocation={props.spriteLocation}/>
        </div>

    )
}
export default World;