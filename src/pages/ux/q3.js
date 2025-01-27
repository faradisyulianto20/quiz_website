import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function UxQ3() {
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
                <div className='web-category'>Category : UX Design</div>
                <div className='ux-level'>3/5</div>
                <div className='question'>What is the main purpose of usability testing in UX?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>Measuring website loading speed</div>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>Ensuring the design matches user needs</div>
                </div>
                <div className='flex'>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>Optimizing for search engines</div>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>Improving marketing strategies</div>
                </div>
            </div>
            <div>
                <button className='ux'><Link to='/game/uxq4' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default UxQ3;