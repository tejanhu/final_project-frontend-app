import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH, TILES_WIDE_COUNT, TILES_HIGH_COUNT, MAP_LIST_HEIGHT, MAP_LIST_WIDTH } from '../../config/Constants';
import mapList from './data/mapList';

export default function handleMovement(direction, gameThis){

    function inBounds(position){
        return (position[0] >= 0 && position[0] <=(520-SPRITE_SIZE)
        && position[1] >= 0 && position[1] <= (260-SPRITE_SIZE))
    }

    function isValidPosition(position){
        if(!inBounds(position)){
            return false
        }

        const tiles = mapList[gameThis.state.mapCOORD[0]][gameThis.state.mapCOORD[1]]
        const y = position[1] / SPRITE_SIZE
        const x = position[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]

        return (nextTile < 5)
    }

    function isValidMap(mapCOORD){
        console.log("checking if new map is valid")
        return (mapCOORD[0] >= 0 && mapCOORD[0] < MAP_LIST_HEIGHT && mapCOORD[1] >= 0 && mapCOORD[1] < MAP_LIST_WIDTH);
    }

    function handleMapChange(position, direction){
        const oldPos = position;
        const oldMapCOORD = gameThis.state.mapCOORD;
        let newPosition;
        let newMapCOORD;

        switch(direction){
            case 'WEST':
                newMapCOORD = [oldMapCOORD[0], oldMapCOORD[1]-1]
                newPosition =  [MAP_WIDTH - SPRITE_SIZE, oldPos[1]]
                break;
            case 'EAST':
                newMapCOORD = [oldMapCOORD[0], oldMapCOORD[1]+1]
                newPosition =  [0, oldPos[1]];
                break;
            case 'NORTH':
                newMapCOORD = [oldMapCOORD[0]-1, oldMapCOORD[1]]
                newPosition =  [oldPos[0], MAP_HEIGHT-SPRITE_SIZE];
                break;
            case 'SOUTH':
                newMapCOORD = [oldMapCOORD[0]+1, oldMapCOORD[1]]
                newPosition =  [oldPos[0], 0];
                break;
            default:
                newPosition =  oldPos    
        }

        if(isValidMap(newMapCOORD)){
            console.log("changing new position to" + newPosition);
            gameThis.setState({
                    positiion: newPosition,
            })
            gameThis.setState({
                    mapCOORD: newMapCOORD
            })
             return newPosition
        }
           
            return oldPos;
    }

    function handleMovement(direction){
        const oldPos = gameThis.state.position;
        let newPosition;
        console.log("in handle movement oldPos is: " + oldPos);
        console.log("direction is : " + direction)
        switch(direction){
            case 'WEST':
                newPosition =  [oldPos[0]-SPRITE_SIZE, oldPos[1]];
                break;
            case 'EAST':
                newPosition =  [oldPos[0]+SPRITE_SIZE, oldPos[1]];
                break;
            case 'NORTH':
                newPosition =  [oldPos[0], oldPos[1]-SPRITE_SIZE];
                break;
            case 'SOUTH':
                newPosition =  [oldPos[0], oldPos[1]+SPRITE_SIZE];
                break;
        }

        if(!inBounds(newPosition)){
            return newPosition = handleMapChange(oldPos, direction);
        }

        if(isValidPosition(newPosition)){
            return newPosition
        }else{
            return oldPos
        } 
    }


    function getQuestion(){
        gameThis.setState({
            onQuestion: true,
        })
    }

    return  handleMovement(direction);
}