import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function MotionQ4() {
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
                <div className='web-category'>Category : Motion Graphics</div>
                <div className='motion-level'>4/5</div>
                <div className='question'>What does a motion graphics designer focus on?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Coding back-end features</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Combining animation and design</div>
                </div>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Filming videos</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Editing spreadsheets</div>
                </div>
            </div>
            <div>
                <button className='motion'><Link to='/game/motionq5' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default MotionQ4;