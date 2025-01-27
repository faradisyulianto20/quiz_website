import './q1.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function MotionQ1() {
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
                <div className='motion-level'>1/5</div>
                <div className='question'>What is motion graphics mainly used for?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Adding interactivity to websites</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Creating dynamic visuals through animation</div>
                </div>
                <div className='flex'>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Designing logos</div>
                    <div className='motion-box-answer'><input type='radio' className='radio'></input>Coding games</div>
                </div>
            </div>
            <div>
                <button className='motion'><Link to='/game/motionq2' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default MotionQ1;