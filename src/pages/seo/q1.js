import './q1.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from '../images/study.jpg'

function SeoQ1() {
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
                <div className='seo-level'>1/5</div>
                <div className='question'>What does SEO stand for?</div>
            </div>
            <div className='web-container-box'>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Search Engine Optimization</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Secure External Operations</div>
                </div>
                <div className='flex'>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Social Engagement Online</div>
                    <div className='seo-box-answer'><input type='radio' className='radio'></input>Speed Enhancement Online</div>
                </div>
            </div>
            <div>
                <button className='seo'><Link to='/game/seoq2' className='next'>Next Question</Link></button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default SeoQ1;