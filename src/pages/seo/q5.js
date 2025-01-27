import './q2.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function SeoQ5() {
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
                <div className='seo-level'>5/5</div>
                <div className='question'>Which of the following is considered "off-page SEO"??</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Website speed optimization</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Backlink building</div>
                </div>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Writing clean HTML</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Structuring internal links</div>
                </div>
            </div>
            <div>
                <button className='seo'><Link to='/game/seo/end' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default SeoQ5;