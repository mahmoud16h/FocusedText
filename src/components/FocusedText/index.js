import React, { Component } from 'react';
import './index.css';

class FocusedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theText: 'What an incredible performance by @NgoloKante, surely ' +
                     'he should be in the running for player of the year alongside @MoSalah.',
            textToRender: ""
        };
    }

    componentWillMount() {
        const {theText} = this.state
        const {focusOn, clickAction} = this.props
        const words = theText.split(' ')
        const textToRender = [];
        words.forEach(word => {
            if (!word.startsWith(focusOn)) return textToRender.push(word, ' ');
            const mention = (
                <div key={word} className="mention" onClick={()=>{clickAction(word +  " here is the name of the mentioned " +
                    "person, we can use this mention to check for the user on the backend and grab their profile. " +
                    "Ready for an action ")}}>
                    {word}
                </div>

            )
            textToRender.push(mention, ' ');
        })
        this.setState({textToRender});
    }

    render() {
        return (
            <div className="container">
                {this.state.textToRender}
            </div>
        );
    }
}

export default FocusedText
