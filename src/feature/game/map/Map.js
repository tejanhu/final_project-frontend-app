import React, {Component} from 'react';
import { SPRITE_SIZE } from '../../../config/Constants';
import './map.css';

function getTileSprite(type){
    switch(type){
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}

function MapTile(props){
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
    }}
    ></div>
}

function MapRow(props){
    return <div 
        className='tileRow' 
        style={{height: '40px'}}
    >
    {props.tiles.map( tile => <MapTile tile={tile}/>)}
    </div>

}

function Map(props){
    return (
        <div
            style={{
                position: 'relative',
                width: '520px',
                height:'240px',
                backgroundColor: 'green',
            }}
        >
        {props.tiles.map( row => <MapRow tiles={row} />)}
        </div>
    )
}

export default Map;