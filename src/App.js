import React from 'react';
import './App.css';
import * as LibComponent from "./components";
import Mock from "./mock/Mock.js";

class App extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <React.Fragment>
                <LibComponent.summary summaries={Mock} />
            </React.Fragment>
        )
    }
}

export default App;
