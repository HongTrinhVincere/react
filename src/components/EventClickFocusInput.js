import React, {Component} from 'react';
import * as LibComponent from ".";
class EventClickFocusInput extends Component {
    constructor(props) {
        super();
        this.textInputEle = React.createRef();
    }
    focusTextInput(){
        this.textInputEle.current.focus();
    }
    componentWillMount(){
        // before render
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    componentDidMount() {
        // after render
    }
    componentWillUnmount(){
    }
    tick() {
    }
    render() {
        return (
            <div class="groupInput">
                <input type="text" ref={this.textInputEle}/>
                <input type="button" value="Click on me" onClick={this.focusTextInput}/>
            </div>
        );
    }
}

export {EventClickFocusInput};