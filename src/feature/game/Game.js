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
            mapCOORD: [1,1],
            correctVisible: false,
            wrongVisible: false
        };


        function componentWillMount() {

        }

        componentWillMount()
        {
            /* Create reference to messages in Firebase Database */
            // let messagesRef = fire.database().ref('Player').child('Score').orderByKey().limitToLast(100);
            // messagesRef.on('child_added', snapshot => {
            //     /* Update React state when message is added at Firebase Database */
            //     let message = { text: snapshot.val(), id: snapshot.key };
            //     this.setState({ messages: [message].concat(this.state.messages) });
            // })
            // {fire.database().ref('Player').child('Score').on("value", function(datasnapshot)
            // {
            //     let myScore = datasnapshot.val().valueOf();
            //     self.setState({
            //         score: myScore,
            //
            //     })
            // })
            // }
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
                    <Question questions={this.state.questions} handleAnswer={(answer) => this.handleAnswer(answer)}/>
                    :
                    <World position={this.state.position} tiles={map}/>  }
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
