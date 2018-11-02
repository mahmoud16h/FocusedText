import React from 'react';
import './index.css';

const FocusedText = ({focusOn, clickAction, theText}) => {
    const renderText = () => {
        const textToRender = [];
        const words = theText.split(' ')
        words.forEach(word => {
            if (!word.startsWith(focusOn)) {
                return textToRender.push(word, ' ')
            }
            const mention = (
                <div key={word} className="mention" onClick={()=>{clickAction(word + mentionClickAlert)}}>
                    {word}
                </div>

            )
            textToRender.push(mention, ' ');
        })
        return textToRender;
    }


        return (
            <div className="container">
                {renderText()}
            </div>
        );
}

export default FocusedText

const mentionClickAlert = " here is the name of the mentioned person, we can use this mention to check for the user on " +
                          "the backend and grab their profile. Ready for an action "