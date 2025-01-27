import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebdevQ4() {
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
                <div className='webdev-level'>4/5</div>
                <div className='question'>Which of these is an example of a back-end framework?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>React</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Bootstrap</div>
                </div>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Node.js</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Sass</div>
                </div>
            </div>
            <div>
                <button className='webdev'><Link to='/game/webdevq5' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebdevQ4;