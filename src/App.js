import React, { Component } from 'react';
import './App.css';
import FocusedText from "./components/FocusedText"

class App extends Component {
    render() {
        const textToConvert = 'What an incredible performance by @NgoloKante, surely ' +
        'he should be in the running for player of the year alongside @MoSalah and @EdenHazard.'

        // The FocusedText component below can be reused for #, or pretty much anything you want, simply change the focusOn prop.
        // I've also passed the onClick down as a prop so you can set whatever action you want, as well as passing the text as a prop.
        return (
            <div className="App">
                <FocusedText focusOn="@" clickAction={alert} theText={textToConvert}/>
            </div>
        );
    }
}

export default App
