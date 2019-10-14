import React from 'react';
import logo from './logo.svg';
import './App.css';
import shortsummary from './shortsummary.js';
import education from './education.js'
import { FaBeer } from 'react-icons/fa';
function App() {
  return (
    <div className="App" style={{'text-align':'left', 'width' : "800px", 'margin' : 'auto'}}>
        <section class="short-summary">
            <div className>
                <ul>
                <FaBeer />
                    <li>Full Name : Trinh Thi My Hong</li>
                    <li>Birth date : 12/03/1991</li>
                    <li>Gender : Female</li>
                    <li>IoMdCall Phone number : 0964390068</li>
                    <li>Email : hong.trinh.vincere@gmail.com</li>
                    <li>Location Adress : 16/15 Street 34, Linh Dong , Thu Duc</li>
                </ul>
            </div>
        </section>
        <section class="education">
            <h2>Education</h2>
            <div>
                University : TDT 
                Object : Information technology
                Graduation : 9/2013
                Rate : good
            </div>
        </section>
        <section>
            <h2>Certificate</h2>
            <ul>
                <li>Toeic : 550</li>
            </ul>
        </section>
        <section class="personal-skill">
            <h2>Personal Skill</h2>
            <ul>
                <li>Languages: Expert vietnamses, inter English</li>
                <li>Team work : very good</li>
                <li>Resolve problem skill : good</li>
                <li>Working attitude : honest</li>
            </ul>
        </section>
        <section class="work-experience">
            <h2>Work Experience</h2>
            <ul class="group">
                <li>Company Name : TNHH TMDV NiNa</li>
                <li>Working time : 09/2013 - 4/2015</li>
                <li>Position : Fullstack PHP developer</li>
                <li>Adress : Quang trung software park, Dictrict 12</li>
            </ul>
            <ul class="group">
                <li>Company Name : TNHH TMDV Foody </li>
                <li>Working time : 09/2015 - 4/2016</li>
                <li>Position : Front end developer</li>
                <li>Adress : Cong quynh, Dictrict 1</li>
            </ul>
            <ul class="group">
                <li>Company Name : TNHH TMDV NiNa</li>
                <li>Working time : 09/2016 - at present</li>
                <li>Position : Front end developer</li>
                <li>Adress : 11 Mac Dinh Chi, Ben Nghe, Q1</li>
            </ul>
        </section>
        <section class="hobbies">
            <h2>Hobbies</h2>
            <ul>
                <li></li>
            </ul>
        </section>
    </div>
  );
}

export default App;
