import React, {Component} from 'react';
import './index.css';

class FocusedText extends Component {
    constructor(props) {
    super(props);
    this.state = {
        value: '',
        searching: false,
        searchFor: ''
    };
}

    checkKey = (event)=>{
        console.log(this.refs.textarea.innerHTML)
        console.log(event)
        const {value, searching, searchFor} = this.state;
        const length = value.length
        const lastChar = value.substring(length - 1, length)

        if (event.keyCode === 50 && event.shiftKey === true){
            this.setState({searching: true, searchFor: ''});
        }

        if (event.which === 8 && lastChar === "@") {
            this.setState({searching: false, searchFor: ''})
        }

        if (event.which === 32 || event.which === 13 ){
            this.setState({searching: false, searchFor: ''})
        }

        if (searching){
            this.setState({searchFor: searchFor + event.key})
        }
    }

    renderResults = ()=>{
        const {searchFor} = this.state
        let filteredNames = []
        if (searchFor !== '') {
            filteredNames = names.filter(name => name.includes(searchFor))
        }

        return filteredNames.map(name => (
                <div key={name} className="search-results" onClick={()=>{this.addName(name)}} >{name}</div>
        ))
    }

    addName = (name)=>{
        console.log(this.refs.textarea.current)
        const textToRender = [];
        const words = this.refs.textarea.innerHTML.split(' ')
        words.forEach(word => {
                return textToRender.push(word, ' ')
            }
        )
        const newString = <span style={{color: 'blue'}}>{name}</span>
        textToRender.push(newString)
        this.refs.textarea.innerHTML=textToRender
        console.log(textToRender)
        this.setState({value: textToRender, searching: false, searchFor: ''})
    }

    changeInner = (e) => {
        // this.refs.textarea.innerHTML = e.target.innerHTML
        this.setState({value: e.target.innerHTML});
    }

    render() {
        console.log("the state:", this.refs.textarea && this.refs.textarea.innerHTML)
        return (
            <div className="container">
                <div className="input-field"
                     contentEditable={true}
                     ref="textarea"
                     onInput={this.changeInner}
                     onKeyDown={this.checkKey}
                     defaultValue={this.state.value}
                >
                    {this.state.value}
                </div>
                    {this.state.searching && this.renderResults()}
            </div>
        );
    }
}

export default FocusedText

const names = ['mahmoud', 'mustafa', 'abs', 'bobby', 'allan', 'smith']