import './Finish-ux.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function FinishUx() {
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
                <div className='ux-level'>Congratulation</div>
                <div className='finish-web-category'>Category : UX Design</div>
                <div className='question'>You answered</div>
                <div className='ux-level'>5 / 5</div>
                <div className='question'>questions correct</div>
            </div>
            <div className='web-container-box'>
                
            </div>
            <div className='flex'>
                <button className='ux'><Link to='/game' className='no-deco'>Play Again</Link></button>
                <button className='ux'><Link to='/home' className='no-deco home anomali'>Back to Home</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default FinishUx;