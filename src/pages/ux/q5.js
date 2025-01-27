import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function UxQ5() {
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
                <div className='ux-level'>5/5</div>
                <div className='question'>What is a wireframe in UX design?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>A 3D model of a website</div>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>A high-fidelity design prototype</div>
                </div>
                <div className='flex'>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>A basic layout sketch of a design</div>
                    <div className='ux-box-answer'><input type='radio' className='radio'></input>A data analysis tool</div>
                </div>
            </div>
            <div>
                <button className='ux'><Link to='/game/ux/end' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default UxQ5;