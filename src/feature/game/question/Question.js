import React, { Component } from 'react';
import BattleInfo from "./BattleInfo";


class Question extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
        
    }

    
    render(){
        const question = this.props.question;
        const answers =  question.answers;
       
        console.log("current question is :  " + this.props.question.toString())
        return (
            <div
              style={{
                backgroundColor: 'gray',
                width:'100%',
                height:'100%',
              }}
            >
                    <div >
                        <div id={"title"}>Question:<br/>{question.question}</div>
                    </div>
                    <div id={"answer1"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[0])}>{question.answers[0].answer}</div>
                    <div id={"answer2"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[1])}>{question.answers[1].answer}</div>
                    <div id={"answer3"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[2])}>{question.answers[2].answer}</div>
                    <div id={"answer4"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[3])}>{question.answers[3].answer}</div>
            </div>
        )
    }
}

export default Question;