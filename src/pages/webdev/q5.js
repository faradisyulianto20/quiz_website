import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebdevQ5() {
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
                <div className='webdev-level'>5/5</div>
                <div className='question'>What does "responsive web development" mean?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Coding websites that work only on mobile devices</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Developing sites optimized for desktop users</div>
                </div>
                <div className='flex'>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input>Creating websites that adapt to any screen size</div>
                    <div className='webdev-box-answer'><input type='radio' className='radio'></input> Building websites with hard-coded dimensions</div>
                </div>
            </div>
            <div>
                <button className='webdev'><Link to='/game/webdev/end' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebdevQ5;