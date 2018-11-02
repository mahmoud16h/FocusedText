import React, { Component } from 'react';
import './App.css';
import FocusedText from "./components/FocusedText"

class App extends Component {
    render() {
        // The FocusedText component below can be reused for #, or pretty much anything you want, simply change the focusOn prop
        // I've also passed the onClick down as a prop so you can set whatever action you want.
        return (
            <div className="App">
                <FocusedText focusOn="@" clickAction={alert}/>
            </div>
        );
    }
}

export default App
