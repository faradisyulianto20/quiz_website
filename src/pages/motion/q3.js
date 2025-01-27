import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function MotionQ3() {
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
                <div className='motion-level'>3/5</div>
                <div className='question'>What is a key element of motion graphics?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Typography animation</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Static banners</div>
                </div>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Raw footage editing</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Slide transitions</div>
                </div>
            </div>
            <div>
                <button className='motion'><Link to='/game/motionq4' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default MotionQ3;