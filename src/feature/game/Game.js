import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './game.css';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";
import Difficulty from "./Difficulty";
import World from "./world/World";
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH, TILES_WIDE_COUNT, TILES_HIGH_COUNT, MAP_LIST_HEIGHT, MAP_LIST_WIDTH } from '../../config/Constants';
import Question from './question/Question';
import BattleInfo from './question/BattleInfo';
import mapList from './data/mapList';
import handleMovement from './handleMovement';
import ArrowKeysReact from 'arrow-keys-react';


class Game extends Component {
    constructor(props) {
        super(props);
        const self =this;

        ArrowKeysReact.config({
            left: () => {
                console.log("left arrow key pressed");
                this.handleArrowPress('WEST');
            },
            right: () => {
                 this.handleArrowPress('EAST');
            },
            up: () => {
                this.handleArrowPress('NORTH');
            },
            down: () => {
                this.handleArrowPress('SOUTH');
            }
        });

        window.addEventListener("keydown", function(e) {
            // space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);

        this.state = {
          position: [3*SPRITE_SIZE, 3*SPRITE_SIZE],
          onQuestion: false,
          questions: [],
          score: 0,
          playerName: "Hussein",
          currentHp: 10,
          maxHp: 10,
          currentLevel: 8,
          loading: false,
          mapCOORD: [1,1]
        };
    }


    getNewPosition(direction){
        const newPosition = handleMovement(direction, this);
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
        if(randomSeed < 0.05){
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
        let map = mapList[this.state.mapCOORD[0]][this.state.mapCOORD[1]];
        console.log("player position is :" + this.state.position);
        console.log("map is : " + map);
        return (
            <div className="gameContainer" {...ArrowKeysReact.events} tabIndex="1">
                 <div className="gameBanner">
                      <Difficulty />
                      
                </div>
                <div className="playerInfo">
                    <PlayerInfo score={(event) => this.state.score(event)}/>
                </div>
                <div className="sideDisplay">
                    {(this.state.onQuestion) ?
                    <BattleInfo />
                    :
                    <Compass handleArrowPress={(direction) => this.handleArrowPress(direction)}/>
                    } 
                </div>
                <div className="mainDisplay"  onKeyDown={this.handleKeyDown}>
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
