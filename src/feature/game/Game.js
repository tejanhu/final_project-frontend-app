import React, {Component} from 'react';
import './game.css';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";
import Difficulty from "./Difficulty";
import World from "./world/World";
import { SPRITE_SIZE } from '../../config/Constants';
import Question from './question/Question';
import BattleInfo from './question/BattleInfo';
import maps from './data/maps';


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
          map: maps[0]
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

        const tiles = this.state.map
        const y = position[1] / SPRITE_SIZE
        const x = position[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]

        return (nextTile < 5)
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
        console.log("this.state.map is " + this.state.map)
        return (
            <div className="gameContainer">
                 <div className="gameBanner">
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
                    <World position={this.state.position} tiles={this.state.map}/>  }
                </div>
            </div>
    );
    }
}

export default Game;
