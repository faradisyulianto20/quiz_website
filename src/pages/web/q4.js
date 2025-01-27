import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebQ4() {
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
                <div className='web-category'>Category : Web Design</div>
                <div className='web-level'>4/5</div>
                <div className='question'>What is the best way to ensure accessibility in web design?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>Use large font sizes only</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>Optimize only for desktop users</div>
                </div>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>Provide alt text for images and use ARIA roles</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>Make the website design complex</div>
                </div>
            </div>
            <div>
                <button><Link to='/game/webq5' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebQ4;