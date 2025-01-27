import './Game.css';
import React from 'react';
import { Link } from 'react-router-dom'
import image from './images/study.jpg'

function Game() {
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
            <div>Choose one from categories below & see how many questions you can answer correctly out of 5 questions!</div>
            <div className='container-box'>
                <Link to='/game/webq1' className='box box1'>
                    <h5>Web Design</h5>
                    <p>Creating visually appealing, user-friendly layouts with responsive and accessible designs.</p>
                </Link>
                <Link to='/game/motionq1' className='box box2'>
                    <h5>Motion Graphics</h5>
                    <p>Combining animation and design for dynamic visuals in videos and websites.</p>
                </Link>
                <Link to='/game/webdevq1' className='box box3'>
                    <h5>Web Development</h5>
                    <p>Building functional websites using front-end and back-end technologies.</p>
                </Link>
                <Link to='/game/uxq1' className='box box4'>
                    <h5>UX Design</h5>
                    <p>Improving user experience through research, prototypes, and usability testing.</p>
                </Link>
                <Link to='/game/seoq1' className='box box5'>
                    <h5>SEO Optimise</h5>
                    <p>Boosting website visibility by optimizing content and structure for search engines.</p>
                </Link>
            </div>
            <div>
                <button>
                    <Link to='/game/webq1' className='start-quiz'>Start Quiz</Link>
                </button>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Game;