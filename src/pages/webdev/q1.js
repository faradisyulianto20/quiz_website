import './q1.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebdevQ1() {
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
                <div className='webdev-level'>1/5</div>
                <div className='question'>What is front-end development?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Creating database structures</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Developing the user-facing parts of a website</div>
                </div>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Managing server-side logic</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Writing shell scripts</div>
                </div>
            </div>
            <div>
                <button className='webdev'><Link to='/game/webdevq2' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebdevQ1;