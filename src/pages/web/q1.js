import './q1.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebQ1() {
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
                <div className='web-level'>1/5</div>
                <div className='question'>What is the primary goal of web design?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>Increasing website loading speed</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>Creating visually appealing, user-friendly layouts</div>
                </div>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>Writing efficient backend code</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>Managing database systems</div>
                </div>
            </div>
            <div>
                <button><Link to='/game/webq2' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebQ1;