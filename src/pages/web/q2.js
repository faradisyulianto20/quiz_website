import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function WebQ2() {
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
                <div className='web-level'>2/5</div>
                <div className='question'>What does "responsive design" mean in web design?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>A website reacts to user input with animations</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>A website adjusts its layout based on screen size</div>
                </div>
                <div className='flex'>
                    <div className='box-answer'><input type='radio' className='radio'></input>A website that loads faster</div>
                    <div className='box-answer'><input type='radio' className='radio'></input>A website with interactive elements</div>
                </div>
            </div>
            <div>
                <button><Link to='/game/webq3' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default WebQ2;