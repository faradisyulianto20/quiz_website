import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebdevQ3() {
    return(
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='Faradis-quiz'>FaraQuiz</div>
          <div className='profile'> 
            <img src={image} alt='profile' className='profile'></img>
            <div className='name'>Faradis Yulianto </div>
            <div class="dropdown">
                <div class="icon"></div>
            </div>
          </div>
        </div>
        <div className='game-content'>
            <div className='web-header'>   
                <div className='web-category'>Category : Web Development</div>
                <div className='webdev-level'>3/5</div>
                <div className='question'>What is a common tool for managing web development projects?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Git</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Excel</div>
                </div>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Canva</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Figma</div>
                </div>
            </div>
            <div>
                <button className='webdev'><Link to='/game/webdevq4' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebdevQ3;