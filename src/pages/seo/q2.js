import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function SeoQ2() {
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
                <div className='web-category'>Category : SEO Optimise</div>
                <div className='seo-level'>2/5</div>
                <div className='question'>What is a key factor for improving SEO rankings?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Increasing ad spend</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Creating high-quality, relevant content </div>
                </div>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Using complex code</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Ignoring mobile users</div>
                </div>
            </div>
            <div>
                <button className='seo'><Link to='/game/seoq3' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default SeoQ2;