import './Home.css';
import React from 'react';
import image from './images/study.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return(
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='Faradis-quiz'>FaraQuiz</div>
          <div ><Link to='/login' className='have-acc'>Already have an account?</Link></div>
        </div>
        <div className='content'>
          <div className='image'><img src={image} alt='study'></img></div>
          <div className='main'>
            <div className='utama'>
              <div className='header-content'>
                <h1>Welcome to FaraQuiz</h1>
                <h4>Register your account</h4>
              </div>
              <form>
                <label>Enter Name</label>
                <input></input>

                <label>Enter Email</label>
                <input></input>

                <label>Enter Password</label>
                <input></input>

                <button type='submit'><Link to='/game'className='sign-up'>Sign Up</Link></button>
              </form>
              <div className='social-media'>
                <div>Create account with</div>
                <a href='google.com'><i className='fab fa-facebook-f'></i></a>
                <a href='google.com'><i className='fab fa-linkedin-in'></i></a>
                <a href='google.com'><i className='fab fa-google'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Home;