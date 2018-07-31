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
        const question = this.props.questions[0];
        const answers = question.answers;

        return (
            <div
              style={{
                backgroundColor: 'gray',
                width:'100%',
                height:'100%',
              }}
            >
                    <div >
                        <div id={"title"}>Question:<br/>{this.props.questions[0].description}</div>
                    </div>
                    <div id={"answer1"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[0])}>{this.props.questions[0].answers[0].answerValue}</div>
                    <div id={"answer2"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[1])}>{this.props.questions[0].answers[1].answerValue}</div>
                    <div id={"answer3"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[2])}>{this.props.questions[0].answers[2].answerValue}</div>
                    <div id={"answer4"} className={"question"} onClick={(answer) => this.props.handleAnswer(answers[3])}>{this.props.questions[0].answers[3].answerValue}</div>
            </div>
        )
    }
}

export default Question;