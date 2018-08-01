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
import fire from "../../Registration/firebase/firebase"


class Game extends Component {
    constructor(props) {
        super(props);
        const self =this;
        this.state = {messages: []};

        ArrowKeysReact.config({
            left: () => {
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
            currentQuestion: {},
            score: 0,
            playerName: "Hussein",
            currentHp: 10,
            maxHp: 10,
            currentLevel: 8,
            loading: false,
            mapCOORD: [1,1],
            correctVisible: false,
            wrongVisible: false,
            spriteLocation: '0px 0px',
            walkIndex: 0,           
        };


        function componentWillMount() {

        }

        componentWillMount()
        {
            fire.auth().onAuthStateChanged(function(user){
                if (user){
                    user = fire.auth().currentUser;
                    let messagesRef = fire.database().ref(user.uid).child('Score').orderByKey().limitToLast(100);
                    messagesRef.on('child_added', snapshot => {
                        /* Update React state when message is added at Firebase Database */
                        let message = { text: snapshot.val(), id: snapshot.key };
                        this.setState({ messages: [message].concat(this.state.messages) });
                    })
                }else{

                }
            })
        }

}


    getNewPosition(direction){
        const newPosition = handleMovement(direction, this);
        this.setState({
            position: newPosition
        })

    }

    getQuestion(){
        const questions = this.state.questions;
        const question = questions[Math.floor(Math.random()*questions.length)]

        this.setState({
            onQuestion: true,
            question: question, 
        })
    }

    
    handleArrowPress(direction){

        this.getNewPosition(direction);

        const randomSeed = Math.random();
        if(randomSeed < 0.05){
            this.getQuestion();
        }
        
    }

    handleAnswer(answer){
        let newScore = this.state.score.valueOf();

        if(answer.correct){
            newScore += 100;
            fire.auth().onAuthStateChanged(function(user){
                if (user){
                    user = fire.auth().currentUser;
                    fire.database().ref('Player').child(user.uid).child('Score').set(newScore);
                }else{

                }
            })

            fire.database().ref('Everyone').child('scored').push(newScore);
            console.log(fire.database().ref('Everyone').child('scored'))
            console.log('everyone')

            this.handleClickShowAlert("correct");
        } else {
            this.handleClickShowAlert("wrong");
        }
        
        this.setState({
            onQuestion: false,
            score: newScore,
        })
    }

    componentDidMount() {
        fetch("http://localhost:8182/question/getAll")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                questions: result
              });
              this.setState({
                  currentQuestion: this.state.questions[0],
              })
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    handleClickShowAlert(answer) {

        if (answer === "correct"){
            this.setState({
                correctVisible: true
            });

            setTimeout(() => {
                this.setState({
                    correctVisible: false
                });
            }, 2000);
        } else if (answer === "wrong"){
            this.setState({
                wrongVisible: true
            });

            setTimeout(() => {
                this.setState({
                    wrongVisible: false
                });
            }, 2000);
        }

    }

    render() {

        let map = mapList[this.state.mapCOORD[0]][this.state.mapCOORD[1]];

        return (
            <div className="gameContainer" {...ArrowKeysReact.events} tabIndex="1">
                 <div className="gameBanner">
                      <Difficulty />
                      
                </div>
                <div className="playerInfo">
                    {/*<PlayerInfo score={(event) => this.state.score(event)}/>*/}
                    <PlayerInfo/>
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
                    <Question question={this.state.question} handleAnswer={(answer) => this.handleAnswer(answer)}/>
                    :
                    <World position={this.state.position} spriteLocation={this.state.spriteLocation} tiles={map}/>  }
                </div>
                <div>
                    <div id={"correctAnswer"} className={`alert alert-success ${this.state.correctVisible ? 'alert-shown' : 'alert-hidden'}`} role="alert"><strong>Correct! Well done!</strong> You win the battle!</div>
                    <div id={"wrongAnswer"} className={`alert alert-danger ${this.state.wrongVisible ? 'alert-shown' : 'alert-hidden'}`} role="alert"><strong>Incorrect!</strong> Try again next time.</div>
                </div>
            </div>

    );
    }
}

export default Game;
