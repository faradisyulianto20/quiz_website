import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebQ5() {
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
                <div className='web-level'>5/5</div>
                <div className='question'>Which tool is commonly used for web design?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>Figma</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>PHP</div>
                </div>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>MySQL</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>Node.js</div>
                </div>
            </div>
            <div>
                <button><Link to='/game/web/end' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebQ5;