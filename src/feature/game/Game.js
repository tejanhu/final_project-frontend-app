import React, {Component} from 'react';
import './game.css';
import PlayerInfo from './navigation/PlayerInfo';
import Compass from "./navigation/Compass";
import Difficulty from "./Difficulty";
import World from "./world/World";
import { SPRITE_SIZE } from '../../config/Constants';
import Question from './question/Question';
import BattleInfo from './question/BattleInfo';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: [12,5],
          onQuestion: false,
          questions: [],
          score: 0,
          playerName: "Hussein",
          currentHp: 10,
          maxHp: 10,
          currentLevel: 8,
          loading: false
        };
    }

    handleMovement(direction){
        const oldPos = this.state.position;
        console.log("in handle movement oldPos is: " + oldPos);
        switch(direction){
            case 'WEST':
                return [oldPos[0]-SPRITE_SIZE, oldPos[1]]
            case 'EAST':
                return [oldPos[0]+SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1]-SPRITE_SIZE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1]+SPRITE_SIZE]
            default:
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
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
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
        return (
            <div>
                <Difficulty/>
                <div className="jumbotronMain">
                    <div className={"jumbotronPlayerInfo"}></div>
                    <PlayerInfo score={this.state.score}/>
                    <div className="sideDisplay">
                         {(this.state.onQuestion) ?
                            <BattleInfo />
                            :
                            <Compass handleArrowPress={(direction) => this.handleArrowPress(direction)}/>
                         }  

                    </div>
                    <div id="display" className="display" >
                        {(this.state.onQuestion) ? 
                        <Question questions={this.state.questions} handleAnswer={(answer) => this.handleAnswer(answer)}/>
                        :
                         <World position={this.state.position} />  }
                    </div>
                </div>
            </div>
    );
    }
}

export default Game;