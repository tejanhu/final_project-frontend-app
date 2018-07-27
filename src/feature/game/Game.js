import React, {Component} from 'react';
import './game.css';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";
import Difficulty from "./Difficulty";
import World from "./world/World";
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH, TILES_WIDE_COUNT, TILES_HIGH_COUNT } from '../../config/Constants';
import Question from './question/Question';
import BattleInfo from './question/BattleInfo';
import mapList from './data/mapList';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: [0,0],
          onQuestion: false,
          questions: [],
          score: 0,
          playerName: "Hussein",
          currentHp: 10,
          maxHp: 10,
          currentLevel: 8,
          loading: false,
          mapCOORD: [0,0]
        };
    }

    inBounds(position){
        return (position[0] >= 0 && position[0] <=(520-SPRITE_SIZE)
        && position[1] >= 0 && position[1] <= (260-SPRITE_SIZE))
    }

    isValidPosition(position){
        if(!this.inBounds(position)){
            return false
        }

        const tiles = mapList[this.state.mapCOORD[0]][this.state.mapCOORD[1]]
        const y = position[1] / SPRITE_SIZE
        const x = position[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]

        return (nextTile < 5)
    }

    isValidMap(mapCOORD){
        console.log("checking if new map is valid")
        return mapList[mapCOORD[0]][mapCOORD[1]]
    }

    handleMapChange(position, direction){
        const oldPos = position;
        const oldMapCOORD = this.state.mapCOORD;
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

        if(this.isValidMap(newMapCOORD)){
            this.setState({
                    mapCOORD: newMapCOORD
            })

             return newPosition
        }
           
            return oldPos;
    }

    handleMovement(direction){
        const oldPos = this.state.position;
        let newPosition;
        console.log("in handle movement oldPos is: " + oldPos);
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
            default:
                newPosition =  oldPos    
        }

        if(!this.inBounds(newPosition)){
            newPosition = this.handleMapChange(oldPos, direction);
        }

        if(this.isValidPosition(newPosition)){
            return newPosition
        }else{
            return oldPos
        } 
    }

    getNewPosition(direction){
        const newPosition = this.handleMovement(direction);
        this.setState({
            position: newPosition
        })

    }

    getQuestion(){
        this.setState({
            onQuestion: true,
        })
    }

    handleArrowPress(direction){
        console.log(direction + ": has been pressed");

        this.getNewPosition(direction);
        console.log("newPosition: " + this.state.position);

        const randomSeed = Math.random();
        if(randomSeed < 0.2){
            this.getQuestion();
        }
        
    }

    handleAnswer(answer){
        console.log("answer passed in is :" + answer);
        let newScore = this.state.score.valueOf();

        if(answer.answerBoolean){
            newScore += 100;
        }
        
        this.setState({
            onQuestion: false,
            score: newScore,
        })
    }

    componentDidMount() {
      
        this.setState({
            questions: [
                {description: "What will add(5,2) output when ran?",
                answers:[
                    {answerValue:"7", answerBoolean: true},
                    {answerValue:"1", answerBoolean: false},
                    {answerValue:"5", answerBoolean: false},
                    {answerValue:"4", answerBoolean: false},
                ]       
        }
        ]
        })

    }

    render() {
        console.log("this.state.mapCoord is " + this.state.mapCOORD);
        let map = mapList[this.state.mapCOORD[0]][this.state.mapCOORD[1]]
        console.log("map is : " + map);
        return (
            <div className="gameContainer">
                 <div class="gameBanner">
                      <Difficulty />
                      
                </div>
                <div className="playerInfo">
                    <PlayerInfo score={this.state.score}/>
                </div>
                <div className="sideDisplay">
                    {(this.state.onQuestion) ?
                    <BattleInfo />
                    :
                    <Compass handleArrowPress={(direction) => this.handleArrowPress(direction)}/>
                    } 
                </div>
                <div className="mainDisplay" >
                    {(this.state.onQuestion) ? 
                    <Question questions={this.state.questions} handleAnswer={(answer) => this.handleAnswer(answer)}/>
                    :
                    <World position={this.state.position} tiles={map}/>  }
                </div>
            </div>
    );
    }
}

export default Game;
