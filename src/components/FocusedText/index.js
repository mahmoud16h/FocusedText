import React, {Component} from 'react';
import {connect} from 'react-redux'
import './index.css';
import { MentionsInput, Mention } from 'react-mentions'
import { getPost } from '../../actions/mentions'

class FocusedText extends Component {
    constructor(props) {
    super(props);
    this.state = {
        value: '',
    };
}

    handleChange = (e)=>{
        this.setState({value: e.target.value})
    }
    render() {
        return (
            <div>
            <MentionsInput className="input-field" value={this.state.value} onChange={this.handleChange}>
                <Mention
                    trigger="@"
                    data={this.props.users}
                    style={styled}
                    renderSuggestion={(
                        suggestion,
                        search,
                        highlightedDisplay,
                        focused,
                        index,
                    ) => (
                        <div className={`user ${focused ? 'focused' : ''}`}>
                        @{highlightedDisplay}
                        </div>
                        )}
                />
            </MentionsInput>
                <button onClick={()=>this.props.postMention(this.state.value)}>Submit</button>
                <div>Please open the console upon submitting to view the post Object</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    postMention: text => dispatch(getPost(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(FocusedText)

const styled = {
    backgroundColor: 'aliceblue',
    fontSize: "16.5px",
}
