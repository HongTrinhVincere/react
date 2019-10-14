import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as LibComponent from "./components";
import Mock from "./mock/Mock.js";
function App() {
    const {summary_infos} = Mock;
    const {introduce} = summary_infos;
    const {short_summary} = summary_infos;
  return (
    <div>
        <LibComponent.introduce data={introduce}/>
        <LibComponent.shortSummary data={short_summary}/>
    </div>
  );
}

export default App;
